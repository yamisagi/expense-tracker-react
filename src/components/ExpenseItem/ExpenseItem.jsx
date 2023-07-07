import './ExpenseItem.scss'
import ExpenseCalendar from '../ExpenseCalendar/ExpenseCalendar';
import PropTypes from 'prop-types';


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