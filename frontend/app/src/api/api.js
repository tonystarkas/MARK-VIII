import axios from "axios";
import { resolve } from "./resolve.js";

export const correlationBar = async (instrument) => {
  return await resolve(
    axios
      .get(
        "https://yfapi.net/v6/finance/recommendationsbysymbol/" + instrument,
        { headers: { "X-API-KEY": "nRh8GRGQQi9t7ks8jHqKh9TvdI10sQ7T4RRCCkPO" } }
      )
      .catch((error) => {
        console.log(error);
      })
  );
};

export const login = async (test) => {
  return await resolve(
    axios.post("localhost:8080/login", { test }).then((res) => res.data)
  );
};
