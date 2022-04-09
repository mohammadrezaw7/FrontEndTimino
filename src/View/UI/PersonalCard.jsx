import classes from "./PersonalCard.module.css";

export default function PersonalCard(props) {
  return <div className={classes.card}>{props.children}</div>;
}
