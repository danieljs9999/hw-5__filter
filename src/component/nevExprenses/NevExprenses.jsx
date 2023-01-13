import React from "react";
import ExspensForm from "../exspens-form/ExspensForm";
import "./NevExprenses.css";
import Button from "../UL/button/Button";
import { useState } from "react";

function NevExprenses({ onNewExpenseAdd }) {
  const [showForm, setshowForm] = useState(false);

  const showExpenseForm = () => {
    setshowForm((prevState) => !prevState);
  };
  return (
    <div>
      {showForm ? (
        <ExspensForm
          onShowForm={showExpenseForm}
          onNewExpenseAdd={onNewExpenseAdd}
        />
      ) : (
        <div className="divButtonAdd">
          <Button
            style={"button"}
            title="Добавить новый расход"
            onClick={showExpenseForm}
          />
        </div>
      )}
    </div>
  );
}

export default NevExprenses;
