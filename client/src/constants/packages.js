const Packages = async () => {
  try {
    const response = await fetch('http://localhost:3131/');
    const body = response.json();
    return body;
  } catch (err) {
    console.error(`error at packages ${err}`);
  }
};

export default Packages;
