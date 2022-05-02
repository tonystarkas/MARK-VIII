import SubmitFormBox from "./components/SubmitFormBox";
import CorrelationBox from "./components/CorrelationBox";
import GeneralDataBox from "./components/GeneralDataBox";
import HistoricalDataBoxTable from "./components/HistoricalDataBoxTable";
import HistoricalDataBoxGraph from "./components/HistoricalDataBoxGraph";
import AdditionalDataBox from "./components/AdditionalDataBox";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import image from "./stonker.jpg";
import { Button } from "@mui/material";

const StockView = (props) => {
  const [switchState, setSwitchState] = useState(false);

  const [responsesData, setResponsesData] = useState({
    correlationObject: [],
    generalDataObject: [],
    historicalDataObject: [],
    additionalDataObject: [],
  });

  const setFormData = (allResponses) => {
    setResponsesData(allResponses);
  };

  const switchChecked = () => {
    setSwitchState(!switchState);
  };

  const backToPrevious = () => {
    props.backFunction();
  };

  return (
    <div className="stockView">
      <div className="marketDataCollumn">
        <div className="parameterInputBox">
          <img className="image2" src={image} alt=""></img>
          <div className="backButton">
            <Button
              className="backButton"
              size="small"
              variant="contained"
              onClick={backToPrevious}
            >
              Back
            </Button>
          </div>
          <SubmitFormBox setFormData={setFormData} />
        </div>
        <div className="correlationBox">
          <CorrelationBox correlationObject={responsesData.correlationObject} />
        </div>
        <div className="dataBox">
          <div className="generalDataBox">
            <GeneralDataBox
              generalDataObject={responsesData.generalDataObject}
            />
          </div>
          {responsesData.correlationObject.length > 0 && (
            <div className="historicalBox">
              <div className="switch">
                <FormControlLabel
                  control={<Switch />}
                  label="Change view"
                  checked={switchState}
                  onChange={switchChecked}
                />
              </div>
              {!switchState && (
                <div>
                  <HistoricalDataBoxTable
                    historicalDataObject={responsesData.historicalDataObject}
                  />
                </div>
              )}
              {switchState && (
                <div>
                  <HistoricalDataBoxGraph
                    historicalDataObject={responsesData.historicalDataObject}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        {responsesData.additionalDataObject.length !== 0 && (
          <div>
            <AdditionalDataBox
              additionalDataObject={responsesData.additionalDataObject}
            />
          </div>
        )}
      </div>
      <div className="socialMediaCollumn"></div>
    </div>
  );
};

export default StockView;
