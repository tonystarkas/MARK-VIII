import SubmitFormBox from "./components/SubmitFormBox";
import CorrelationBox from "./components/CorrelationBox";
import { useState } from "react";

const StockView = () => {
  const [responsesData, setResponsesData] = useState({ correlationObject: [] });

  const setFormData = (allResponses) => {
    setResponsesData(allResponses);
  };

  return (
    <div className="stockView">
      <div className="marketDataCollumn">
        <div className="parameterInputBox">
          <SubmitFormBox setFormData={setFormData} />
        </div>
        <div className="correlationBox">
          <CorrelationBox correlationObject={responsesData.correlationObject} />
        </div>
      </div>
      <div className="socialMediaCollumn">CHUPAPI MUNENYO</div>
    </div>
  );
};

export default StockView;
