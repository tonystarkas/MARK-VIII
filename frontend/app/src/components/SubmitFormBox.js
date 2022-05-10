import { FormGroup, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import * as React from "react";

import {
  correlationBar,
  generalData,
  historicalData,
  additionalData,
  newsArticles,
} from "../api/api.js";
import Papa from "papaparse";

const SubmitFormBox = (props) => {
  const [instrument, setInstrument] = useState(props.currentInstrument);
  const [interval, setInterval] = React.useState("");
  const [range, setRange] = React.useState("");
  const [startPeriod, setStartPeriod] = useState("");
  const [endPeriod, setEndPeriod] = useState("");

  const submitForm = async () => {
    // const correlationResponse = await correlationBar(instrument);
    // console.log(correlationResponse);
    const generalDataResponse = await generalData(instrument);
    const reformattedGeneralDataResponse = Papa.parse(
      generalDataResponse.data.data
    );

    const historicalDataResponse = await historicalData(
      instrument,
      interval,
      range,
      startPeriod,
      endPeriod
    );

    const additionalDataResponse = await additionalData(instrument);

    const timestamps = [
      historicalDataResponse.data.data.chart.result[0].timestamp,
    ];

    const close = [
      historicalDataResponse.data.data.chart.result[0].indicators.quote[0]
        .close,
    ];

    const high = [
      historicalDataResponse.data.data.chart.result[0].indicators.quote[0].high,
    ];

    const low = [
      historicalDataResponse.data.data.chart.result[0].indicators.quote[0].low,
    ];

    const open = [
      historicalDataResponse.data.data.chart.result[0].indicators.quote[0].open,
    ];

    const volume = [
      historicalDataResponse.data.data.chart.result[0].indicators.quote[0]
        .volume,
    ];

    const unixToDate = timestamps[0].map((value) =>
      new Date(value * 1000).toLocaleString("lt-LT")
    );

    const reformattedAdditionalDataResponse =
      additionalDataResponse.data.data.quoteResponse.result[0];

    const reformattedHistoricalDataResponse = [
      unixToDate,
      open[0],
      high[0],
      low[0],
      close[0],
      volume[0],
    ];

    const correlationResponse = [
      {
        symbol: "NIO",
        score: 0.186695,
      },
      {
        symbol: "ABNB",
        score: 0.148779,
      },
      {
        symbol: "SQ",
        score: 0.144,
      },
      {
        symbol: "SNOW",
        score: -0.137601,
      },
      {
        symbol: "COIN",
        score: 0.135044,
      },
    ];

    const news = await newsArticles(instrument);
    // props.setFormData({
    //   correlationObject:
    //     correlationResponse.data.data.finance.result[0].recommendedSymbols,
    // });
    props.setFormData({
      correlationObject: correlationResponse,
      generalDataObject: reformattedGeneralDataResponse.data,
      historicalDataObject: reformattedHistoricalDataResponse,
      additionalDataObject: reformattedAdditionalDataResponse,
      newsArticles: news.data.data.articles,
    });
  };

  return (
    <div className="inputParameters">
      <FormGroup>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <TextField
            className="select"
            label="Instrument"
            id="outlined-size-small"
            size="small"
            value={props.currentInstrument}
            onChange={(e) => setInstrument(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Interval</InputLabel>
          <Select
            className="select"
            labelId="demo-select-small"
            id="demo-select-small"
            value={interval}
            label="interval"
            onChange={(e) => setInterval(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"1 Minute"}>1 Minute</MenuItem>
            <MenuItem value={"2 minutes"}>2 Minutes</MenuItem>
            <MenuItem value={"5 Minutes"}>5 Minutes</MenuItem>
            <MenuItem value={"15 Minutes"}>15 Minutes</MenuItem>
            <MenuItem value={"30 Minutes"}>30 Minutes</MenuItem>
            <MenuItem value={"90 Minutes"}>90 Minutes</MenuItem>
            <MenuItem value={"Hourly"}>Hourly</MenuItem>
            <MenuItem value={"Daily"}>Daily</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Range</InputLabel>
          <Select
            className="select"
            labelId="demo-select-small"
            id="demo-select-small"
            value={range}
            label="range"
            onChange={(e) => setRange(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"1 day"}>1 Day</MenuItem>
            <MenuItem value={"5 days"}>5 Days</MenuItem>
            <MenuItem value={"1 month"}>1 Month</MenuItem>
            <MenuItem value={"3 months"}>3 Months</MenuItem>
            <MenuItem value={"6 months"}>6 Months</MenuItem>
            <MenuItem value={"1 year"}>1 Year</MenuItem>
            <MenuItem value={"2 years"}>2 Years</MenuItem>
            <MenuItem value={"5 years"}>5 Years</MenuItem>
            <MenuItem value={"10 years"}>10 Years</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <TextField
            className="select"
            label="Start Period"
            id="outlined-size-small"
            size="small"
            onChange={(e) => setStartPeriod(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <TextField
            className="select"
            label="End Period"
            id="outlined-size-small"
            size="small"
            onChange={(e) => setEndPeriod(e.target.value)}
          />
        </FormControl>
        <div className="submitButton">
          <Button
            className="formButton"
            size="small"
            variant="contained"
            onClick={submitForm}
          >
            Submit
          </Button>
        </div>
      </FormGroup>
    </div>
  );
};

export default SubmitFormBox;
