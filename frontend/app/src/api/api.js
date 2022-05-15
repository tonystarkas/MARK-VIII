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
  let url = "https://query1.finance.yahoo.com/v8/finance/chart/" + instrument;

  var startPeriodSubstring = startPeriod.toString().substring(3, 24);
  var endPeriodSubstring = endPeriod.toString().substring(3, 24);
  var startPeriodParsed = Date.parse(startPeriodSubstring) / 1000;
  var endPeriodParsed = Date.parse(endPeriodSubstring) / 1000;
  var temp = 0;

  if (interval || range || startPeriod || endPeriod) {
    url = url + "?";
  }

  if (interval.lenght > 0) {
    url = url + "interval=" + interval;
    temp += 1;
  }

  // if (range.lenght > 0 && temp === 0) {
  //   url = url + "range=" + range;
  // } else {
  //   url = url + "&range=" + range;
  // }

  if (startPeriod != null && temp === 0) {
    url = url + "period1=" + startPeriodParsed + "&period2=" + endPeriodParsed;
  } else {
    url = url + "&period1=" + startPeriodParsed + "&period2=" + endPeriodParsed;
  }

  console.log(url);

  return await resolve(
    axios.get(url).catch((error) => {
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

export const newsArticles = async (instrument) => {
  return await resolve(
    axios
      .get("https://newsapi.org/v2/everything?q=" + instrument, {
        headers: { "X-API-KEY": "23517558d02148cab13796874f027101" },
      })
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
