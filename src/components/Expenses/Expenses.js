import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  // Trigger the function to move the value from expenseFilter to here
  const filterChangeHandler = (selectedYear) => {
    console.log("We are on Expenses.js");
    console.log(selectedYear);

    // Storing the year chosen on the Dropdown from ExepenseFilter
    setFilteredYear(selectedYear);
  };

  // A new array is created with the filtered year selected  by the user
  const filteredExpenses = props.items.filter((expense) => {
    // Only items that match the year selected willbe stored in the array
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        // In order fro React to know where to add a new item, we are using the "key" prop
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }

  return (
    <div>
      <Card className="expenses">
        {/* We are using "selected"(you can name it watyever you want) in order to send the default dropdown value */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>

        {/* getting the array of objects from app.js to here through props to then converting each item from the array to an ExpenseItem */}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
