import "./ForgetPasswordPage.css";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { Input } from "antd";
import qs from "qs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

export default function ForgetPasswordPage() {
  const emailInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleSubmit = (e) => {
    e.preventDefault();
    // TEST
    // dispatch(authActions.addEmail(emailInputRef.current.value));
    // console.log(emailInputRef.current.value);
    // navigate("/CodePage");

    const data = qs.stringify({
      email: emailInputRef.current.value,
    });
    const config = {
      method: "POST",
      url: "https://timino-app-2.iran.liara.run//api/auth/forgot-password/send-email",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", //x-www-form-urlencoded
      },
      data: data,
    };

    (async () => {
      try {
        await axios(config);
        dispatch(authActions.addEmail(emailInputRef.current.value));
        navigate("/CodePage");
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

  return (
    <div className="forget-pass">
      <div className="forget-pass-inner">
        <form className="formd" onSubmit={HandleSubmit}>
          <h2>Reset your password</h2>
          <h5>
            Enter your email address and we will send you Verification Code
          </h5>

          <p>
            <label id="reset_pass_lbl">Email address</label>
            <br />
            <input
              placeholder="email"
              ref={emailInputRef}
              type="email"
              name="email"
              required
            />
          </p>
          <p>
            <button id="sub_btn" type="submit">
              Send code to my email
            </button>
          </p>

          <footer>
            <p>
              <Link to="/">Back to Home</Link>
            </p>
          </footer>
        </form>
      </div>
    </div>
  );
}
