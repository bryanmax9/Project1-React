import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // We are creating thsi function so that when the form from ExpenseForm is submited
  // Then, we will save the data(the object with the atrributes) here
  // also, we give the object a random id
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    console.log("Data:" + expenseData + " has arrived to NewExpense");
    console.log("sending data from form to App.js...");
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* we are going to pass the data from ExpenseForm to here */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
