import "./ExpenseItem.scss";
import ExpenseCalendar from "../expense-calendar/ExpenseCalendar";

const ExpenseItem = ({ title, amount, date }) => {
  date = new Date(date);
  return (
    <li>
      <div className="expense-item">
        <ExpenseCalendar date={date} />
        <div className="expense-item__description">
          <h2 className="expense-item__title">{title}</h2>
          <div className="expense-item__price">{amount}₺</div>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
