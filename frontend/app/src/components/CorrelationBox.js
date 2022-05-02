const CorrelationBox = (props) => {
  return (
    <div className="correlationDisplay">
      {props.correlationObject.map((correlation) => (
        <div>
          {correlation.symbol}
          {correlation.score < 0 ? (
            <div style={{ color: "red" }}>{correlation.score}</div>
          ) : (
            <div style={{ color: "green" }}>{correlation.score}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CorrelationBox;
