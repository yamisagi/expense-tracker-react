import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/new-expense/NewExpense";
import React from "react";

const Home = () => {
  const expenses = [
    {
      id: "e1",
      title: "Market Alışverişi",
      amount: 94.12,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "Yeni TV",
      amount: 799.49,
      date: new Date(2022, 5, 12),
    },
    {
      id: "e3",
      title: "Araba Sigortası",
      amount: 2500.67,
      date: new Date(2022, 8, 12),
    },
    {
      id: "e4",
      title: "Yeni Masa (Ofis)",
      amount: 450,
      date: new Date(2023, 4, 12),
    },
  ];
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
