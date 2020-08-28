import axios from 'axios';

const Packages = async () => {
  try {
    // const response = await fetch(`http://localhost:3131`);
    // const body = response.json();
    // return body;
    return await axios
      .get('http://localhost:3131/packages')
      .then((res) => res.data)
      .then((data) => data.filter((value) => Object.keys(value).length !== 0));
  } catch (err) {
    console.error(`error at packages ${err}`);
  }
};

export default Packages;
