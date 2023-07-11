import React, { useRef, useState } from 'react'

import './ExpenseForm.scss'

const ExpenseForm = () => {
    const formRef = useRef(null)
    const [expense, setExpense] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const handleForm = (e) => {
        e.preventDefault();
        console.log(expense);
        formRef.current.reset();
    }

    const titleChangeHandler = (event) => {
        setExpense({
            ...expense,
            title: event.target.value
        })
    }
    
    const amountChangeHandler = (event) => {
        setExpense({
            ...expense,
            amount: event.target.value
        })
    }
    const dateChangeHandler = (event) => {
        setExpense({
            ...expense,
            date: event.target.value
        })
        console.log(expense);
    }
    return (
        <form id='expense' ref={formRef} onSubmit={handleForm}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Başlık</label>
                    <input id='title' type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Fiyat</label>
                    <input id='amount' type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Tarih</label>
                    <input id='date' type="date" min="2019-01-01" max={
                        new Date().toLocaleDateString().split('.').reverse().join('-')
                    } onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button form='expense' type="submit"
                >Ekle</button>
            </div>
        </form >
    )
}

export default ExpenseForm