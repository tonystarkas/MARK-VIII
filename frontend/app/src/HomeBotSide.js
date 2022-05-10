import { Box } from "@mui/material";

const HomeBotSide = () => {
  return (
    <Box
      className="homeBotSideBox"
      style={{
        width: "90%",
        marginTop: "5rem",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "5rem",
      }}
    >
      <div className="faq infoBox">
        <fieldset className="fieldset">
          <legend>FAQ</legend>
          <ul>
            <li
              class="hovertext"
              data-hover="The application uses Yahoo Finance's publically accessable api to gather all wanted data."
            >
              Where does the data come from?
            </li>
            <li
              class="hovertext"
              data-hover="Yes, the application is free to use."
            >
              Is it free to use?
            </li>
            <li
              class="hovertext"
              data-hover="Yes, the historical data is available for download by using 'Download .csv file' button above the historical data table."
            >
              Can i save the data on my computer?
            </li>
            <li
              class="hovertext"
              data-hover="No, the only mandatory parameters for historical request are the instrument and time periods."
            >
              Do i have to define every parameter for a historical request?
            </li>
            <li
              class="hovertext"
              data-hover="Check to see if the instrument requested is correct. You can also always contact our team."
            >
              My request doesn't return anything. What can i do?
            </li>
          </ul>
        </fieldset>
      </div>
      <div className="fieldExplanations infoBox">
        <fieldset className="fieldset">
          <legend>Input Fields</legend>
          <ul>
            <li
              class="hovertext"
              data-hover="Instrument is the designated name of a company's shares, e.g. Tesla's share name is TSLA."
            >
              Instrument
            </li>
            <li
              class="hovertext"
              data-hover="Range is the amount of time, for which the data is collected, without specifying the time period by dates."
            >
              Range
            </li>
            <li
              class="hovertext"
              data-hover="Interval is how frequent the data should be, e.g. the state of a share every minute or every hour"
            >
              Interval
            </li>
            <li
              class="hovertext"
              data-hover="These are the values for defining a conrete range of time, for which the data should be collected"
            >
              Start and End Time Periods
            </li>
          </ul>
        </fieldset>
      </div>
      <div className="contactInfo infoBox">
        <fieldset className="fieldset">
          <legend>Contact Us</legend>
          <h3>Twitter: @MarketViewer</h3>
          <h3>E-Mail: market.viewer@gmail.com</h3>
        </fieldset>
      </div>
    </Box>
  );
};

export default HomeBotSide;
