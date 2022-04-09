import classes from "./PublicCard.module.css";

export default function PublicCard(props) {
  return <div className={classes.card}>{props.children}</div>;
}
