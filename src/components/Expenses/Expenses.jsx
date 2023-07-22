import "./Expenses.scss";

import { useState } from "react";
import Card from "../Card/Card";
import ExpenseFilter from "../expense-filter/ExpenseFilter";
import ExpensesList from "../expenses-list/ExpensesList";

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

  return (
    <Card className="expenses">
      <ExpenseFilter
        filteredYear={filteredYear}
        onChangeFilter={filterChangeHandler}
        // TODO: Use this later
        // activateFilter={activateFilter}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
