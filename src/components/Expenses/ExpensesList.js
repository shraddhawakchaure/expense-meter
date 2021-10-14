import React from "react";
import "./ExpensesList.css";
import Expenseitem from "./Expenseitem";

const ExpensesList = (props) => {
  
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses!</h2>
  }
  return (
    <div className="expense-list">
      {props.items.map((expense) => (
        <Expenseitem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );

};

export default ExpensesList;
