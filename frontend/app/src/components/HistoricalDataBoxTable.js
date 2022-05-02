const HistoricalDataBoxTable = (props) => {
  const columns = ["Timestamp", "Open", "High", "Low", "Close", "Volume"];
  return (
    <div className="historicalDataBox">
      <div className="historicalTableColumn">
        <div className="historicalTableHeader">{columns[0]}</div>
        {(props.historicalDataObject[0] || []).map((timestamp) => (
          <div className="historicalTableCell">{timestamp}</div>
        ))}
      </div>
      <div className="historicalTableColumn">
        <div className="historicalTableHeader">{columns[1]}</div>
        {(props.historicalDataObject[1] || []).map((Open) => (
          <div className="historicalTableCell">{Open}</div>
        ))}
      </div>
      <div className="historicalTableColumn">
        <div className="historicalTableHeader">{columns[2]}</div>
        {(props.historicalDataObject[2] || []).map((high) => (
          <div className="historicalTableCell">{high}</div>
        ))}
      </div>
      <div className="historicalTableColumn">
        <div className="historicalTableHeader">{columns[3]}</div>
        {(props.historicalDataObject[3] || []).map((low) => (
          <div className="historicalTableCell">{low}</div>
        ))}
      </div>
      <div className="historicalTableColumn">
        <div className="historicalTableHeader">{columns[4]}</div>
        {(props.historicalDataObject[4] || []).map((close) => (
          <div className="historicalTableCell">{close}</div>
        ))}
      </div>
      <div className="historicalTableColumn">
        <div className="historicalTableHeader">{columns[5]}</div>
        {(props.historicalDataObject[5] || []).map((volume) => (
          <div className="historicalTableCell">{volume}</div>
        ))}
      </div>
    </div>
  );
};

export default HistoricalDataBoxTable;
