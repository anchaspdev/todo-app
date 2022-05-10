import axios from "axios";

export default axios.create({
  baseURL: "https://my-json-server.typicode.com/anchaspdev/todo-app-mock/",
  headers: {
    "Content-type": "application/json",
  },
  maxContentLength: 100000000,
  maxBodyLength: 1000000000,
});
