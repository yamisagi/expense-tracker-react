import React, { useRef, useState } from "react";

import "./ExpenseForm.scss";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const formRef = useRef(null);
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    onSaveExpenseData(expense);
    console.log(expense);
    formRef.current.reset();
  };

  const inputChangeHandler = (type, value) => {
    // setExpense({
    //     ...expense,
    //     date: event.target.value
    // })

    // Yukarıdaki yöntemi yapmak yerine, önceki state'i alıp, sadece date'i değiştirebiliriz.
    // Böylece daha önceki state'in diğer değerlerini de korumuş oluruz.
    // Bir diğer deyişle, React işleyişinde State'ler scheduled olarak değiştirilir.
    // Ve bu scheduled değişiklikler, bir sonraki render'da uygulanır. Bazı durumlarda;
    // Çok fazla state güncellemesi planlanmışsa dönen state doğru olmayabilir.
    // Bu yüzden, state'i güncellerken, önceki state'i alıp, sadece değiştirmek istediğimiz değeri değiştirmeliyiz.
    // Bu doğru bir yaklaşım olur.
    switch (type) {
      case "title":
        setExpense((prevState) => {
          return {
            ...prevState,
            title: value,
          };
        });
        break;
      case "amount":
        setExpense((prevState) => {
          return {
            ...prevState,
            amount: value,
          };
        });
        break;
      case "date":
        setExpense((prevState) => {
          return {
            ...prevState,
            date: value,
          };
        });
        break;
      default:
        break;
    }
  };

  return (
    <form id="expense" ref={formRef} onSubmit={handleForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Başlık</label>
          <input
            id="title"
            type="text"
            onChange={(e) => inputChangeHandler("title", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Fiyat</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => inputChangeHandler("amount", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Tarih</label>
          <input
            id="date"
            type="date"
            min="2019-01-01"
            max={new Date().toLocaleDateString().split(".").reverse().join("-")}
            onChange={(e) => inputChangeHandler("date", e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button form="expense" type="submit">
          Ekle
        </button>
        <button
          type="button"
          form="expense"
          onClick={() => {
            onCancel();
          }}
        >
          İptal
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
