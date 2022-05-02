const GeneralDataBox = (props) => {
  return (
    <div className="generalDataDisplay">
      <div className="leftCol">
        {(props.generalDataObject[0] || []).map((key) => (
          <div className="generalDataCell">{key}</div>
        ))}
      </div>
      <div className="rightCol">
        {(props.generalDataObject[1] || []).map((value) => (
          <div className="generalDataCell">{value}</div>
        ))}
      </div>
    </div>
  );
};

export default GeneralDataBox;
