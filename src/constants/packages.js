import axios from 'axios';

const BASE_API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3131/packages'
    : '/packages';

const Packages = async () => {
  try {
    // const response = await fetch(`http://localhost:3131`);
    // const body = response.json();
    // return body;
    return await axios
      .get(BASE_API_URL)
      .then((res) => res.data)
      .then((data) => data.filter((value) => Object.keys(value).length !== 0));
  } catch (err) {
    console.error(`error at packages ${err}`);
  }
};

export default Packages;
