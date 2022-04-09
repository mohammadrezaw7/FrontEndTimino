import classes from "./PersonalProfile.module.css";
import { Link } from "react-router-dom";
import PersonalCard from "../UI/PersonalCard";
import avatar from "../../assets/images/avatar.png";
import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

const data = qs.stringify({});

const config = {
  method: "get",
  url: "https://timino-app.iran.liara.run//api/user/show/3",
  headers: {},
  data,
};

export default function PersonalProfile() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    axios(config)
      .then((response) => {
        const jsonData = JSON.stringify(response);
        setUserData(JSON.parse(jsonData).data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  console.log(userData.avatar);

  return (
    <div className={classes.main}>
      <PersonalCard>
        <div className={classes.container}>
          <div className={classes["top-section"]}>
            <div className={classes.avatar}>
              <img
                style={{ margin: "1rem" }}
                src={!!userData.avatar ? userData.avatar : avatar}
                alt="avatar"
                width="250px"
                height="250px"
              />
            </div>
            <div className={classes["field-one"]}>
              <h2>Frist Name: {userData.first_name}</h2>
              <h2>Last Name: {userData.last_name}</h2>
              <h2>Email: {userData.email}</h2>
              <h2>Gender: </h2>
              <div className={classes.radio}>
                <input type="radio" value="MALE" name="gender" id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" value="FEMALE" name="gender" id="female" />
                <label htmlFor="female">Female</label>
                <input type="radio" value="Prefer" name="gender" id="prefer" />
                <label htmlFor="prefer">Prefer Not To Answer</label>
              </div>
              <h2>Cell Phone: none</h2>
            </div>
            <div className={classes["field-two"]}>
              <h2>Telephone: none</h2>
              <h2>Postal code: none</h2>
              <h2>Country: none</h2>
              <h2>Town: none</h2>
              <h2>Full Address: none</h2>
              {/* <h2>Degree: Bachelor </h2>
              <h2>University: IUST </h2>
              <h2>Field Of Study: Computer Engineering</h2> */}
            </div>
          </div>

          <div className={classes["buttom-section"]}>
            <div className={classes["field-three"]}>
              <h2>Soft Skills: none</h2>
              <h2>Hard Skills: none</h2>
              <h2>Languages: none </h2>
            </div>
            <div className={classes["field-four"]}>
              <h2>A Little Aboute ME: </h2>
              <textarea placeholder="write here" cols="50" rows="11"></textarea>
            </div>
          </div>
        </div>
      </PersonalCard>
      <div className={classes["btn-container"]}>
        <Link to="/">
          <button className={classes.button} type="primary" size="large">
            Return to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}
