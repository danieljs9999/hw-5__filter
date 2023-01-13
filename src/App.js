import { useState } from "react";
import "./App.css";
import NevExpenses from "./component/nevExprenses/NevExprenses";
import { Exprenses } from "./component/exprenses/Exprenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Мышка",
      price: 200,
      date: new Date("2020, 2, 9"),
    },
    {
      title: "Мишка",
      price: 300,
      date: new Date("2021, 3, 9"),
    },
    {
      title: "Наушник",
      price: 400,
      date: new Date("2022, 4, 9"),
    },
    {
      title: "Зарядник",
      price: 500,
      date: new Date("2023, 05, 11"),
    },
  ]);

  const addNevExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <NevExpenses onNewExpenseAdd={addNevExpenseHandler} />
      <Exprenses expenses={expenses} />
    </div>
  );
}

export default App;
