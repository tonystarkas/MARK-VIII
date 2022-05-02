import HomeBotSide from "./HomeBotSide";
import HomeTopSide from "./HomeTopSide";
import StockView from "./StockView";
import { useState } from "react";

const Home = () => {
  const [currentState, setCurrentState] = useState(false);

  const changeView = () => {
    setCurrentState(true);
  };

  const goBack = () => {
    setCurrentState(false);
  };

  return (
    <div>
      {!currentState && (
        <div>
          <HomeTopSide viewChangeFunction={changeView} />
          <HomeBotSide />
        </div>
      )}
      {currentState && (
        <div>
          <StockView backFunction={goBack} />
        </div>
      )}
    </div>
  );
};

export default Home;
//stock name by company name
