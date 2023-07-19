import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //tthis function is triggered whener the a vlue is chosen in the dropdown
  const dropdownChangeHandler = (event) => {
    console.log(event.target.value);
    console.log("sending from ExpenseFilter to Expenses..");

    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* We are adding a defult selcted value using "props.selected" */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
