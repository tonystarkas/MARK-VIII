import HomeBotSide from "./HomeBotSide";
import HomeTopSide from "./HomeTopSide";
import StockView from "./StockView";
import { useState } from "react";

const Home = () => {
  const [currentState, setCurrentState] = useState(false);
  const [currentInstrument, setCurrentInstrument] = useState("");

  const changeView = () => {
    setCurrentState(true);
  };

  const goBack = () => {
    setCurrentState(false);
  };

  const sendInstrument = (instrumentValue) => {
    setCurrentInstrument(instrumentValue);
  };

  return (
    <div>
      {!currentState && (
        <div>
          <HomeTopSide
            viewChangeFunction={changeView}
            sendInstrument={sendInstrument}
          />
          <HomeBotSide />
        </div>
      )}
      {currentState && (
        <div>
          <StockView
            backFunction={goBack}
            currentInstrument={currentInstrument}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
//stock name by company name
