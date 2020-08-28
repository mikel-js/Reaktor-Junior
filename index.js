const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const platform = process.platform;

const filePath =
  platform === 'linux' ? '/var/lib/dpkg/status' : './status.real';

app.use(cors());

const removeDuplicates = (array) => {
  return array.reduce(
    (accu, item) => (accu.includes(item) ? accu : [...accu, item]),
    []
  );
};

app.get('/', (req, res) => {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) throw err;
    let splitted = data.toString().split('\n');
    let packageArr = [];
    let packageObj = {};
    let packageKey = '';

    splitted.forEach((focusedValue) => {
      let index = focusedValue.indexOf(':');
      let key = focusedValue.slice(0, index);
      let value = focusedValue.slice(index + 1).trim();
      let ifSpace = /^\s/.test(focusedValue);

      if (focusedValue.length > 0 && !ifSpace) {
        if (key !== 'Package' && key !== 'Depends' && key !== 'Description')
          return;
        packageKey = key;
        packageObj[key] = value;
        if (key === 'Depends') {
          packageObj[key] = value
            .replace(/ *\([^)]*\) */g, '')
            .replace(/\s/g, '');
          if (packageObj[key].includes('|')) {
            packageObj[key] = packageObj[key].substring(
              0,
              packageObj[key].indexOf('|')
            );
          }

          packageObj[key] = packageObj[key].split(',');
          packageObj[key] = removeDuplicates(packageObj[key]);
        }
      } else if (ifSpace && !focusedValue.includes('/')) {
        packageObj[packageKey] += focusedValue;
      } else if (focusedValue.length === 0) {
        packageArr.push(packageObj);
        packageObj = {};
        packageKey = '';
      }
    });

    res.status(200).send(packageArr);
  });
});

app.listen(3131, () => {
  console.log(`Listening at 3131`);
});

// :/mnt/c/Users/michaelcastro/OneDrive/Desktop/reaktor/reaktor
