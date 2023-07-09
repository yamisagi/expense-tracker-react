import './Expenses.scss'

import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';

const Expenses = ({ expenses }) => {
    console.log(expenses);
    return (
        <Card className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} {...expense} />
                // Spread Operator'ü ile expense objesinin tüm özelliklerini ExpenseItem'a gönderiyoruz.
                // Yani bir nevi <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} /> yazmış gibi oluyoruz.
            ))}
        </Card>
    )
}

export default Expenses;