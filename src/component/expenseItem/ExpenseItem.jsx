import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { date, title, price } = props;

  const dateMonth = new Date(date).toLocaleString("ru-ru", { month: "long" });

  return (
    <div>
      <div className="textDiv">
        <ul className="textUl">
          <li className="textcub">
            <span className="span1">{dateMonth}</span>
            <span className="span3">
              {new Date(date).getFullYear().toString()}
            </span>
            <span className="span2">{new Date(date).getDate()}</span>
          </li>
          <li className="li">{title}</li>
          <li className="dol">
            <p className="textDol">$ {price}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExpenseItem;
