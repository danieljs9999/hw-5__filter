import React from "react";
import { useState } from "react";
import Chart from "../chart/Chart";
import ExpenseItem from "../expenseItem/ExpenseItem";
import ExprensesFilter from "../exprensesFilter/ExprensesFilter";
import "./Exprenses.css";

export const Exprenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredItem = expenses.filter((element) => {
    const stringifiedYear = new Date(element.date).getFullYear().toString();
    return stringifiedYear === selectedYear;
  });

  return (
    <div className="divExp">
      <div className="Exprenses_ExprensesFilter">
        <ExprensesFilter value={selectedYear} onChange={yearChangeHandler} />
      </div>
      <Chart items={filteredItem} />
      <ul className="ul">
        {filteredItem.map((elem) => {
          return (
            <ExpenseItem
              key={elem.title}
              title={elem.title}
              price={elem.price}
              date={elem.date}
            />
          );
        })}
      </ul>
    </div>
  );
};
