const ExpenseCalendar = ({ date }) => {
    const month = date.toLocaleString('tr-TR', { month: 'long' });
    const day = date.toLocaleString('tr-TR', { day: '2-digit' });
    const year = date.getFullYear();
    console.log(date);
    return (
        <div>
            <div>
                {month}
            </div>
            <div>
                {day}
            </div>
            <div>
                {year}
            </div>
        </div>
    )
};

export default ExpenseCalendar;