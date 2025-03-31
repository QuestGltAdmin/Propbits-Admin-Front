import axios from "axios";

const axiosMain = axios.create({
  baseURL: "https://ellington.donative.in:3005/",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosMain;
