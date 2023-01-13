import React from "react";
import "./ChartBar.css";

function ChartsBar({ maximumPrise, currentPrise, label }) {
  const fillHeight = (100 * currentPrise) / maximumPrise;

  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div
          className="chart-bar_fill"
          style={{ height: `${fillHeight}%` }}
        ></div>
      </div>
      <p className="chart-bar_label">{label}</p>
    </div>
  );
}

export default ChartsBar;
