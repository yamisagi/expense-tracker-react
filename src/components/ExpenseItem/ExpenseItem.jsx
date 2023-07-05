import './ExpenseItem.scss'
import ExpenseCalendar from '../ExpenseCalendar/ExpenseCalendar';

const ExpenseItem = ({ props }) => {
    const { title, amount, date } = props;

    return (
        <div className='expense-item'>
            <ExpenseCalendar date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}₺</div>
            </div>
        </div>
    )
}

export default ExpenseItem;