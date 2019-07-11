const devProdUrl = window.location.host.includes("localhost")
    ? "http://localhost:5000/"
    : "https://mybuzzin.herokuapp.com/";

export default devProdUrl;
