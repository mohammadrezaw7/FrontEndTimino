import classes from "./UserCard.module.css";

const imagesAddress = [
  "https://picsum.photos/130/130?image=839",
  "https://picsum.photos/130/130?image=856",
  "https://picsum.photos/130/130?image=836",
];

export default function TimeLineCard({ data }) {
  const imageAddress = imagesAddress[Math.floor(Math.random() * 3)];
  return (
    <li>
      <div className={classes["our-team"]}>
        <div className={classes.picture}>
          <img
            className={classes["img-fluid"]}
            src={imageAddress}
            alt="avatar"
          />
        </div>
        <div className={classes["team-content"]}>
          <h3 className={classes["name"]}>{data.title}</h3>
          <h4 className={classes["title"]}>{data.description}</h4>
          <h6>{data.created_at}</h6>
        </div>
      </div>
    </li>
  );
}
