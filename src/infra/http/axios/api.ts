import axios from "axios";
import { API_TOKEN } from "@env";

const axiosInstance = axios.create({
  baseURL:
    "https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${API_TOKEN}`;
  return config;
});

export default axiosInstance;
