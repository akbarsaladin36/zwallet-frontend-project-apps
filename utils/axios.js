import axios from "axios";
import Cookie from "js-cookie";

let dataToken = "";

const setToken = (token) => {
  dataToken = token;
};

const axiosApiIntances = axios.create({
  baseURL: process.env.BASE_URL,
});

// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      Authorization: `Bearer ${dataToken}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiIntances.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 403) {
      alert("Please Login !");
      Cookie.remove("token");
      Cookie.remove("user");
      setToken("");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default { axiosApiIntances, setToken };
