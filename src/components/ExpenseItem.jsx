import './ExpenseItem.scss'

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>
                28 Mart 2023
            </div>
            <div className='expense-item__description'>
                <h2>Araba Giderleri</h2>
                <div className='expense-item__price'>250₺</div>
            </div>
        </div>
    )
}

export default ExpenseItem;