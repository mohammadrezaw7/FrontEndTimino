import classes from "./UserCard.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const imagesAddress = [
  "https://picsum.photos/130/130?image=839",
  "https://picsum.photos/130/130?image=856",
  "https://picsum.photos/130/130?image=836",
];

export default function UserCard({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imageAddress = imagesAddress[Math.floor(Math.random() * 3)];

  const userCardClickHandler = () => {
    navigate("/public-profile");
    dispatch(authActions.setUserId(data.id));
  };

  return (
    <li onClick={userCardClickHandler}>
      <div className={classes["our-team"]}>
        <div className={classes.picture}>
          <img
            className={classes["img-fluid"]}
            src={imageAddress}
            alt="avatar"
          />
        </div>
        <div className={classes["team-content"]}>
          <h3 className={classes["name"]}>{data.username}</h3>
          <h4 className={classes["title"]}>
            {data.first_name + " " + data.last_name}
          </h4>
        </div>
      </div>
    </li>
  );
}
