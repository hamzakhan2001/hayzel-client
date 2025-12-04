import axios from "axios";

const api = axios.create({
  baseURL: "hayzel-server-production.up.railway.app"
});


export default api;
