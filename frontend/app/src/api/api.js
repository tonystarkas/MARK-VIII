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

export const generalData = async (instrument) => {
  return await resolve(
    axios
      .get("https://query1.finance.yahoo.com/v7/finance/download/" + instrument)
      .catch((error) => {
        console.log(error);
      })
  );
};

export const historicalData = async (
  instrument,
  interval,
  range,
  startPeriod,
  endPeriod
) => {
  return await resolve(
    axios
      .get(
        "https://query1.finance.yahoo.com/v8/finance/chart/" +
          instrument +
          "?period1=1650430800&period2=1650517200"
      )
      .catch((error) => {
        console.log(error);
      })
  );
};

export const additionalData = async (instrument) => {
  return await resolve(
    axios
      .get(
        "https://query1.finance.yahoo.com/v7/finance/quote?symbols=" +
          instrument
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
