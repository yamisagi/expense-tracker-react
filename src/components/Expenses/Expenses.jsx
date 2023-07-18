import "./Expenses.scss";

import { useState } from "react";
import ExpenseItem from "../expense-item/ExpenseItem";
import Card from "../Card/Card";
import ExpenseFilter from "../expense-filter/ExpenseFilter";

const Expenses = ({ expenses }) => {
  const getFullYear = new Date().getFullYear().toString();
  const [filteredYear, setFilteredYear] = useState(getFullYear);

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear.target.value);
    setFilteredYear(selectedYear.target.value);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        filteredYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
        // Spread Operator'ü ile expense objesinin tüm özelliklerini ExpenseItem'a gönderiyoruz.
        // Yani bir nevi <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} /> yazmış gibi oluyoruz.
      ))}
    </Card>
  );
};

export default Expenses;
