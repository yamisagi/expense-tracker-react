import './ExpenseItem.scss'
import ExpenseCalendar from '../expense-calendar/ExpenseCalendar';

const ExpenseItem = ({ title, amount, date }) => {
    
    return (
        <div className='expense-item'>
            <ExpenseCalendar date={date} />
            <div className='expense-item__description'>
                <h2 className='expense-item__title'>{title}</h2>
                <div className='expense-item__price'>{amount}₺</div>
            </div>
        </div>
    )
}


export default ExpenseItem;