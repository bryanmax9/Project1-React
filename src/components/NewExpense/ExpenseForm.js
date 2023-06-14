import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // In order to save the input of the user, we will use "useState" to store it

  // We can do and make multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // One state instead of multiple one state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titlechangeHandler = (escrito) => {
    // "escrito" stores anything we type inside the input field
    console.log(escrito.target.value);

    setEnteredTitle(escrito.target.value);

    // The value written by the user then will be stored with this function
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: escrito.target.value,
    // });

    // However the correct way is
    // When state update depends on previous state, then this is the safer way
    // setUserInput((prevstate) => {
    //   return { ...prevstate, enteredTitle: escrito.target.value };
    // });
  };

  // This function is trrigered whenever the amount is changed
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevstate) => {
    //   return { ...prevstate, enteredAmount: event.target.value };
    // });
  };

  // This function is triggered whenever the date is changed
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevstate) => {
    //   return { ...prevstate, enteredDate: event.target.value };
    // });
  };

  // Instead of having separate change Handlers function
  // We can make one shared Change Handler function

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setEnteredTitle(value);
  //   } else if (identifier === "date") {
  //     setEnteredDate(value);
  //   } else {
  //     setEnteredAmount(value);
  //   }
  // };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titlechangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
