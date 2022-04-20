import SubmitFormBox from "./components/SubmitFormBox";
import CorrelationBox from "./components/CorrelationBox";

const StockView = () => {
  return (
    <div className="stockView">
      <div className="marketDataCollumn">
        <div className="parameterInputBox">
          <SubmitFormBox />
        </div>
        <div className="correlationBox">
          <CorrelationBox />
        </div>
      </div>
      <div className="socialMediaCollumn">CHUPAPI MUNENYO</div>
    </div>
  );
};

export default StockView;
