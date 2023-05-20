import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // Adding Javascript code before returning the html
  //Mocking Fetching data

  // We are giving the date data to the component "ExpenseDate"

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
