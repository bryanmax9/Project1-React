import React from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // the  'useState' is a React Hook, this is a variable that changes will lead to this component function to run again
  //It gives us acces to this especial varibable
  // 'useState' returns an array where the first value is the variable value itself and the second elemment is the updated variable

  // Adding Javascript code before returning the html
  //Mocking Fetching data

  // We are giving the date data to the component "ExpenseDate"

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      {/* <div>{props.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
