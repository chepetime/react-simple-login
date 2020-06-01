import axios from "axios";

const baseURL = process.env.REACT_APP_AXIOS_BASEURL || "/api/";
const timeout = process.env.REACT_APP_AXIOS_TIMEOUT || 1000;
const headers = process.env.REACT_APP_AXIOS_HEADERS || {
  "X-Custom-Header": "value",
};

/**
 * Create an axios instance with the same base url, timeout
 * and custom headers
 */
const api = axios.create({ baseURL, timeout, headers });

const GET = (route = "/") => api.get(route);
const POST = (route = "/", payload = {}) => api.post(route, payload);

// [GET] Devices
export const getDevices = () => GET("/devices");

// [GET] Credit Config
export const getCredit = () => GET("/credit-config");

// [GET] Stores
export const getStores = () => GET("/stores");

// [POST] Example
export const postInfo = async (palyoad) => POST("/info", palyoad);

export const login = async (palyoad) => {
  //// return POST("/login", palyoad)
  return true;
};

const services = {
  GET,
  POST,
  getDevices,
  getCredit,
  getStores,
  postInfo,
  login,
};

export default services;
