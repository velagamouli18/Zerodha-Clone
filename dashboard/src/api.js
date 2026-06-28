import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://zerodha-clone-1-syqh.onrender.com";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default api;
export { API_URL };
