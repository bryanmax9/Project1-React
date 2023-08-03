import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

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
    setIsEditing(false);
  };

  // this is triggered when button is pressed in order to show form
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* we are going to pass the data from ExpenseForm to here */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
