import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // Adding Javascript code before returning the html
  //Mocking Fetching data

  // We are giving the date data to the component "ExpenseDate"

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
