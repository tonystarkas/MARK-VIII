import HomeBotSide from "./HomeBotSide";
import HomeTopSide from "./HomeTopSide";
import StockView from "./StockView";
import { useState } from "react";

const Home = () => {
  const [currentState, setCurrentState] = useState(false);

  const changeView = () => {
    setCurrentState(true);
    console.log("Reached");
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
          <StockView />
        </div>
      )}
    </div>
  );
};

export default Home;
