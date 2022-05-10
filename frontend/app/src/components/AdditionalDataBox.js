import { Grid, Box } from "@mui/material";

const AdditionalDataBox = (props) => {
  const aggregatedData = [
    ["region: ", props.additionalDataObject.region],
    ["quoteType: ", props.additionalDataObject.quoteType],
    ["currency: ", props.additionalDataObject.currency],
    ["fullExchangeName: ", props.additionalDataObject.fullExchangeName],
    ["sharesOutstanding: ", props.additionalDataObject.sharesOutstanding],
    ["bookValue: ", props.additionalDataObject.bookValue],
    ["regularMarketTime: ", props.additionalDataObject.regularMarketTime],
    ["regularMarketPrice: ", props.additionalDataObject.regularMarketPrice],
    [
      "regularMarketPreviousClose: ",
      props.additionalDataObject.regularMarketPreviousClose,
    ],
    ["bid: ", props.additionalDataObject.bid],
    ["ask: ", props.additionalDataObject.ask],
    ["exchange: ", props.additionalDataObject.exchange],
    ["longName: ", props.additionalDataObject.longName],
    ["exchangeTimezoneName: ", props.additionalDataObject.exchangeTimezoneName],
    [
      "exchangeTimezoneShortName: ",
      props.additionalDataObject.exchangeTimezoneShortName,
    ],
    ["displayName: ", props.additionalDataObject.displayName],
    ["symbol: ", props.additionalDataObject.symbol],
  ];

  return (
    <div className="additionalDataBox">
      <Box
        className="box"
        style={{
          width: "90%",
          marginTop: "3rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "auto",
        }}
      >
        <Grid container rowSpacing={5} columnSpacing={5} className="gridParent">
          {(aggregatedData || []).map((data) => (
            <Grid xs={4} className="gridElement">
              {data}
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default AdditionalDataBox;
