import React from "react";
import ExpenseForm from "../form/ExpenseForm";
import { v4 } from "uuid";

import "./NewExpense.scss";

const NewExpense = ({ addExpenseHandler }) => {
  // Use UUID to generate random id
  const randomId = () => {
    const id = v4();
    console.log(id);
    return id;
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: randomId(),
    };
    addExpenseHandler(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
