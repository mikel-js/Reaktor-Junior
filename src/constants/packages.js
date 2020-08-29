const BASE_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3131/packages'
    : '/packages';

const Packages = async () => {
  try {
    return await fetch(BASE_API_URL)
      .then((response) => response.json())
      .then((data) => data.filter((value) => Object.keys(value).length !== 0));
  } catch (err) {
    console.error(`error at packages ${err}`);
  }
};

export default Packages;
