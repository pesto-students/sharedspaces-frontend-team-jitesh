import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL:
  //   process.env.REACT_APP_BASE_URL,
});

export default Axios;
