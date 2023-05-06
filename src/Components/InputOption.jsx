import React from "react";
import "../Layouts/InputOption.css";

const InputOption = ({ title, Icon, color }) => {
  return (
    <div className="inputoption">
      <Icon styles={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
