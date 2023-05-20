import "./Card.css";

// This card component will act as a shell around either "ExpenseItem" or "Expenses" content
// However, if we use this component in the wrapper of the divs that contain the card component it will not work
// Therefore we will also make this shell into a wrapper

// We use props in order to indicate the content of the shell or wrapper of the Card component
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

// Now, after adding the props , we will see that the Card component is not styled by the classname
// For this Card component to be styled using className, we must use the classes constant. "card" as default class that is always applied plus classname
// Anything we recieve as a classname from outside is added to the string

export default Card;
