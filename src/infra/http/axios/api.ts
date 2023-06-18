import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io',
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = 'Bearer HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF';
  return config;
});

export default axiosInstance;
