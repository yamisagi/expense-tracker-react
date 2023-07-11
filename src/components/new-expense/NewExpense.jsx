import React from 'react';
import ExpenseForm from '../form/ExpenseForm';

import './NewExpense.scss';

const NewExpense = () => {
    return (
        <div className='new-expense'>
            <ExpenseForm />
        </div>
    )
}

export default NewExpense