import Axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_APP_URL + "/api/"
//   ? import.meta.env.VITE_REACT_APP_URL + "/api/"
//   : window.location.toString().includes("stg")
//   ? "https://hris-api.stg.fligno.com/api/"
//   : window.location.toString().includes("dev")
//   ? "https://hris-api.stg.fligno.com/api/"
//   : "https://hris-api.fligno.com/api/";
const apiService = Axios.create();

const withToken = (config) => {
  let token = localStorage.getItem("token");

  return {
    ...config,
    headers: {
      ...config.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
};
apiService.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }
    } else {
      return Promise.reject(error);
    }
  }
);
apiService.interceptors.request.use(withToken);
apiService.defaults.baseURL = baseUrl;

export default apiService;
