import './ExpenseCalendar.scss'

const ExpenseCalendar = ({ date }) => {
    const month = date.toLocaleString('tr-TR', { month: 'long' });
    const day = date.toLocaleString('tr-TR', { day: '2-digit' });
    const year = date.getFullYear();
    console.log(date);
    return (
        <div className="expense-date">
            <div className="expense-date__month">
                {month}
            </div>
            <div  className="expense-date__day">
                {day}
            </div>
            <div className="expense-date__year">
                {year}
            </div>
        </div>
    )
};

export default ExpenseCalendar;