import React from "react";
import Select from "react-select";
// <img style={{ width: 15, height: 15 }} alt={e.text} src={e.icon} />

const SelectInput = ({ label, ...otherProps }) => {
  const getOptionsLabel = (e) => {
    if (e.icon) {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            alt={e.text}
            style={{ height: 24, width: 24, borderRadius: 100 }}
            src={e.icon}
          ></img>
          <span style={{ marginLeft: 5 }}>{e.text}</span>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginLeft: 5 }}>{e.text}</span>
        </div>
      );
    }
  };
  return (
    <div>
      <label>{label}</label>

      <Select {...otherProps} getOptionLabel={getOptionsLabel} />
    </div>
  );
};

export default SelectInput;
