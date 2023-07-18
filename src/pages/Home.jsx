import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/new-expense/NewExpense";
import React from "react";

const Home = ({ expenses }) => {
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default Home;
