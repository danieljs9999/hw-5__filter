import React from "react";
import "./ExprensesFilters.css";

function ExprensesFilter({ value, onChange }) {
  return (
    <div className="ExprensesFilter_conteiner">
      <div className="ExprensesFilter_conteiner_label_select">
        <label className="ExprensesFilter_conteiner_label">
          Filter by year
        </label>
        <select
          onChange={onChange}
          value={value}
          className="ExprensesFilter_conteiner_select"
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExprensesFilter;
