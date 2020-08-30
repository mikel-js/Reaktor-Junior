import Packages from './packages';

const Dependencies = async () => {
  let arr = await Packages();
  return arr.reduce((accumulator, { Package, Depends }) => {
    if (!Depends || typeof Depends === 'string') return accumulator;
    Depends.forEach((depend) => {
      if (!accumulator[depend]) accumulator[depend] = [];
      accumulator[depend].push(Package);
    });
    return accumulator;
  }, {});
};

export default Dependencies;
