import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_SERVER_DOMAIN || "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // 15s
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      console.warn("Unauthorized — clearing auth");

      localStorage.removeItem("access_token");
    }

    if (status === 403) {
      console.warn("Forbidden access");
    }

    if (status >= 500) {
      console.error("Server error:", error);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
