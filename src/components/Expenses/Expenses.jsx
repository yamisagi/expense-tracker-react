import "./Expenses.scss";

import { useState } from "react";
import ExpenseItem from "../expense-item/ExpenseItem";
import Card from "../Card/Card";
import ExpenseFilter from "../expense-filter/ExpenseFilter";

const Expenses = ({ expenses }) => {
  const getFullYear = new Date().getFullYear().toString();
  const [filteredYear, setFilteredYear] = useState(getFullYear);

  const filteredExpenses = expenses.filter((expense) => {
    const date = expense.date;
    const actualDate = new Date(date);
    return actualDate.getFullYear().toString() === filteredYear;
  });
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear.target.value);
    setFilteredYear(selectedYear.target.value);
  };

  let expensesContent = (
    <div style={{ textAlign: "center" }}>No expenses found.</div>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        filteredYear={filteredYear}
        onChangeFilter={filterChangeHandler}
        // TODO: Use this later
        // activateFilter={activateFilter}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
