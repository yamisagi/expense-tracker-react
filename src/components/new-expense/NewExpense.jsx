import React, { useState } from "react";
import ExpenseForm from "../form/ExpenseForm";
import { v4 } from "uuid";

import "./NewExpense.scss";

const NewExpense = ({ addExpenseHandler }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Use UUID to generate random id
  const randomId = () => {
    const id = v4();
    console.log(id);
    return id;
  };

  const handleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: randomId(),
    };
    addExpenseHandler(expenseData);
    setIsFormVisible(false);
  };

  return (
    <div className="new-expense">
      {/* Alternative Way */}
      {/* {!isFormVisible && (
        <button onClick={() => setIsFormVisible(true)}>Add New Expense</button>
      )}
      {isFormVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={() => setIsFormVisible(false)}
        />
      )} */}
      {isFormVisible ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={handleFormVisibility}
        />
      ) : (
        <button onClick={handleFormVisibility}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
