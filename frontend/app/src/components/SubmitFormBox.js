import { FormControlLabel, FormGroup, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { correlationBar } from "../api/api.js";
import CorrelationBox from "./CorrelationBox";

const SubmitFormBox = (props) => {
  const [instrument, setInstrument] = useState("");
  const [interval, setInterval] = useState("");
  const [range, setRange] = useState("");
  const [startPeriod, setStartPeriod] = useState("");
  const [endPeriod, setEndPeriod] = useState("");
  const [correlationObject, setCorrelationObject] = useState([]);

  const submitForm = async () => {
    // const correlationResponse = await correlationBar(instrument);
    // setCorrelationObject(
    //   correlationResponse.data.data.finance.result[0].recommendedSymbols
    // );
    setCorrelationObject([
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
        score: 0.137601,
      },
      {
        symbol: "COIN",
        score: 0.135044,
      },
    ]);
    <CorrelationBox correlationObject={correlationObject} />;
  };

  return (
    <FormGroup className="parametersForm">
      <div className="parameterRow">
        <label className="formLabel">Instrument:</label>
        <FormControlLabel
          className="inputBox"
          control={
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
            />
          }
        />
      </div>
      <div className="parameterRow">
        <label className="formLabel">Interval:</label>
        <FormControlLabel
          className="inputBox"
          control={
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              value={interval}
              onChange={(e) => setInterval(e.target.interval)}
            />
          }
        />
      </div>
      <div className="parameterRow">
        <label className="formLabel">Range:</label>
        <FormControlLabel
          className="inputBox"
          control={
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              value={range}
              onChange={(e) => setRange(e.target.range)}
            />
          }
        />
      </div>
      <div className="parameterRow">
        <label className="formLabel">Period1:</label>
        <FormControlLabel
          className="inputBox"
          control={
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              value={startPeriod}
              onChange={(e) => setStartPeriod(e.target.startPeriod)}
            />
          }
        />
      </div>
      <div className="parameterRow">
        <label className="formLabel">Period2:</label>
        <FormControlLabel
          className="inputBox"
          control={
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              value={endPeriod}
              onChange={(e) => setEndPeriod(e.target.endPeriod)}
            />
          }
        />
      </div>
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
  );
};

export default SubmitFormBox;
