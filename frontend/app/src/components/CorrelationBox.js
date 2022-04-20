const CorrelationBox = (props) => {
  const test = props.correlationObject;
  console.log(test);
  return (
    <div>
      {test.map((correlation) => (
        //  box element
        <div>{correlation.symbol + " : " + correlation.score}</div>
      ))}
    </div>
  );
};

export default CorrelationBox;
