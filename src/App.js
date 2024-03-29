import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// We are storing all the data as a list of objects that will store all the necessary data
// Here we are Moking an API that is giving as class objects with data that then will be used in the fonrt-end
const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    console.log("We are in App.js");
    // Everytime an expense is added, it will print in the console
    console.log(expense);

    // we add the expense as an item to the array.
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // We are giving the array of objects to the Expenses.js in order to create the ExpenseItems
  // This is JXS
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );

  // Alternative making it using the import 'react'. However, this is conversome and unreadable
  //  DECLARATIVE JavaScript Code
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
};

export default App;
