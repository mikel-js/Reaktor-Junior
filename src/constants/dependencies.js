import Packages from './packages';

const Dependencies = async () => {
  let arr = await Packages();
  let obj = {};
  let arrs = [];

  arr.forEach((el) => {
    if (!el.Depends) return;
    if (typeof el.Depends === 'string') return;
    el.Depends.forEach((els) => {
      if (arrs.includes(els)) return;
      arrs.push(els);
    });
  });
  arrs.forEach((dep) => {
    let depArrs = [];
    arr.forEach((el) => {
      if (!el.Depends) return;
      if (typeof el.Depends === 'string') return;
      el.Depends.find((deps) => {
        if (deps === dep) {
          depArrs.push(el.Package);
          obj[deps] = depArrs;
        }
      });
    });
  });
  return obj;
};

export default Dependencies;
