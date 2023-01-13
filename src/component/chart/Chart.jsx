import React from "react";
import ChartsBar from "./ChartsBar/ChartsBar";
import "./Charts.css";

function Chart({ items }) {
  const maximumPrise = 2000;

  const months = [
    { label: "Январь", currentPrise: 0 },
    { label: "Февраль", currentPrise: 0 },
    { label: "Март", currentPrise: 0 },
    { label: "Апрель", currentPrise: 0 },
    { label: "Май", currentPrise: 0 },
    { label: "Июнь", currentPrise: 0 },
    { label: "Июль", currentPrise: 0 },
    { label: "Август", currentPrise: 0 },
    { label: "Сентябрь", currentPrise: 0 },
    { label: "Октябрь", currentPrise: 0 },
    { label: "Ноябрь", currentPrise: 0 },
    { label: "Декабрь", currentPrise: 0 },
  ];

  items.forEach((item) => {
    const monthNumber = new Date(item.date).getMonth();
    months[monthNumber].currentPrise += item.price;
  });

  return (
    <div className="chart">
      {months.map((item) => {
        return (
          <ChartsBar
            key={item.label}
            label={item.label}
            currentPrise={item.currentPrise}
            maximumPrise={maximumPrise}
          />
        );
      })}
    </div>
  );
}

export default Chart;
