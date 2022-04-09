import classes from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={classes.home}>
      <Link to="personal-profile">
        <button className={classes.btn} type="primary" size="large">
          Personal Profile
        </button>
      </Link>
      <Link to="public-profile">
        <button className={classes["btn-public"]} type="primary" size="large">
          Public Profile
        </button>
      </Link>
    </div>
  );
}
