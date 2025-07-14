import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // غيّر هذا إذا نشرت على الإنترنت
});

export default instance;
