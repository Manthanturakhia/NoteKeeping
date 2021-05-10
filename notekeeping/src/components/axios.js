import axios from "axios";

const instance = axios.create({
  baseURL: "https://note--keeper.herokuapp.com",
});

export default instance;
