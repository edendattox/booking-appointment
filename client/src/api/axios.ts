import axios from "axios";

const baseURL = "http://localhost:4000/api/v1";

const instance = axios.create({ baseURL });

instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const Axios = () => instance;
