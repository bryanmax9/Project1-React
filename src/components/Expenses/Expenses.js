import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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

  return (
    <div>
      <Card className="expenses">
        {/* We are using "selected"(you can name it watyever you want) in order to send the default dropdown value */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>

        {/* getting the array of objects from app.js to here through props to then converting each item from the array to an ExpenseItem */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
