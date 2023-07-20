import axios from "axios";

const Client = axios.create({
  baseURL: "https://translate.api.cloud.yandex.net/translate/v2",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Authorization": ` Api-Key ${import.meta.env.VITE_REACT_APP_TOKEN}`,
  },
});

export default Client;