import {
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";
import image from "./stonker.jpg";
import "./Home.css";

const HomeTopSide = (props) => {
  const [realtimeChecked, setIsRealtimeChecked] = useState(false);
  const [historicalChecked, setIsHistoricalChecked] = useState(false);
  const [instrumentValue, setInstrumentValue] = useState("");

  const realtimeCheckboxClicked = () => {
    setIsRealtimeChecked(!realtimeChecked);
  };

  const historicalCheckboxClicked = () => {
    setIsHistoricalChecked(!historicalChecked);
  };

  const submitClicked = () => {
    props.viewChangeFunction();
    props.sendInstrument(instrumentValue);
  };

  return (
    <div className="background">
      <img className="image" src={image} alt=""></img>
      <Typography style={{ marginLeft: "1rem" }} component={"h3"} variant="h3">
        Market Viewer
      </Typography>
      <div className="center">
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            label="Instrument Input"
            className="select"
            fullWidth
            size={"10rem"}
            onChange={(e) => setInstrumentValue(e.target.value)}
          />
          <Button
            style={{ marginLeft: "1rem" }}
            size="large"
            variant="contained"
            onClick={submitClicked}
          >
            Submit
          </Button>
        </div>
        <div className="checkBoxes">
          <FormControlLabel
            control={<Checkbox size="large" />}
            label="Realtime"
            checked={realtimeChecked}
            onChange={realtimeCheckboxClicked}
          />
          <FormControlLabel
            control={<Checkbox size="large" />}
            label="Historical"
            checked={historicalChecked}
            onChange={historicalCheckboxClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTopSide;
