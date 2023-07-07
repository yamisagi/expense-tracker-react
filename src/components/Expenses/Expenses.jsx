import './Expenses.scss'

import ExpenseItem from '../ExpenseItem/ExpenseItem';

const Expenses = ({ expenses }) => {
    console.log(expenses);
    return (
        <div className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} {...expense} /> 
                // Spread Operator'ü ile expense objesinin tüm özelliklerini ExpenseItem'a gönderiyoruz.
                // Yani bir nevi <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} /> yazmış gibi oluyoruz.
            ))}
        </div>
    )
}

export default Expenses;