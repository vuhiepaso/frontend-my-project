import { useErrorStore } from "../store/useError";
import router from "../router";
import axios from "axios";

axios.defaults.baseURL = "http://192.168.248.37:8000/";
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    switch (error.response.status) {
      case 401:
        localStorage.removeItem("token");
        window.location.reload();
        break;
      case 403:
      case 404:
        console.log(error);
        // router.push({
        //   name: "error",
        //   //   props: {
        //   //     error: {
        //   //       message: error.response.data.message,
        //   //       status: error.status,
        //   //     },
        //   //   },
        // });
        break;
      case 422:
        useErrorStore().$state = error.response.data;
        break;
      default:
        console.log(error.response.data);
    }

    return Promise.reject(error);
  }
);
export default axios;
