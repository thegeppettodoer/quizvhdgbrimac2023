import React from "react";

import "./index.scss";

interface ProgressProps {
  selected: number; // 1 o 2
}

const Progress: React.FC<ProgressProps> = ({ selected }) => {
  return (
    <header className="progress">
      <div className="progress-left">
        <span
          className={selected === 1 ? "circle-selected" : "circle-unselected"}
        >
          1
        </span>
        <span className={selected === 1 ? "text-selected" : "text-unselected"}>
          Planes y coberturas
        </span>
      </div>
      <div className="progress-center">.... </div>
      <div className="progress-right">
        <span
          className={selected === 2 ? "circle-selected" : "circle-unselected"}
        >
          2
        </span>
        <span className={selected === 2 ? "text-selected" : "text-unselected"}>
          {" "}
          Resumen
        </span>
      </div>
    </header>
  );
};

export default Progress;
