import SubmitFormBox from "./components/SubmitFormBox";
import CorrelationBox from "./components/CorrelationBox";
import GeneralDataBox from "./components/GeneralDataBox";
import HistoricalDataBoxTable from "./components/HistoricalDataBoxTable";
import HistoricalDataBoxGraph from "./components/HistoricalDataBoxGraph";
import TwitterFeed from "./components/TwitterFeed";
import NewsFeed from "./components/NewsFeed";
import AdditionalDataBox from "./components/AdditionalDataBox";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import image from "./stonker.jpg";
import { Button } from "@mui/material";
import { CSVLink } from "react-csv";

const StockView = (props) => {
  const [switchState, setSwitchState] = useState(false);
  const fileHeaders = ["Timestamp", "Open", "High", "Low", "Close", "Volume"];

  const [responsesData, setResponsesData] = useState({
    correlationObject: [],
    generalDataObject: [],
    historicalDataObject: [],
    additionalDataObject: [],
    newsArticles: [],
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

  const fileData = [
    responsesData.historicalDataObject[0],
    responsesData.historicalDataObject[1],
    responsesData.historicalDataObject[2],
    responsesData.historicalDataObject[3],
    responsesData.historicalDataObject[4],
    responsesData.historicalDataObject[5],
  ];

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
          <SubmitFormBox
            setFormData={setFormData}
            currentInstrument={props.currentInstrument}
          />
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
                <div className="export">
                  <CSVLink
                    className="csvLink"
                    headers={fileHeaders}
                    data={fileData}
                    filename="results.csv"
                    target="_blank"
                  >
                    Export to .csv file
                  </CSVLink>
                </div>
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
      {responsesData.additionalDataObject.length !== 0 && (
        <div className="socialMediaCollumn">
          <div className="twitterFeed">
            <TwitterFeed></TwitterFeed>
          </div>
          <div className="newsArticles">
            <NewsFeed newsArticles={responsesData.newsArticles} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StockView;
