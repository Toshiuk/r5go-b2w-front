import axios from "axios";

const api = axios.create({
  baseURL: "https://r5-go.herokuapp.com/api",
  headers: {
    Token: sessionStorage.token,
    "Access-Control-Allow-Origin": "*"
  }
});

export default api;
