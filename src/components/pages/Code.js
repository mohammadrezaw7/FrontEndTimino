import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

// import Child3 from './ResetPage'; //send code to ResetPage.js for reading  codel from code.js by ResetPage.js

import "../../App.css";

export default function CodePage() {
  const codeInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handlesubmit2 = (e) => {
    // const Child = (props) => {      // read email from ForgotPasswordPage.js
    //         let x =  props.data
    // }

    // const history = useHistory();
    e.preventDefault();
    // var axios = require('axios');
    // var qs = require('qs');
    const data = qs.stringify({
      email: authState.email,
      code: Number(codeInputRef.current.value),
    });
    const config = {
      method: "post",
      url: "https://timino-application.iran.liara.run//api/auth/forgot-password/verify-password",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    (async () => {
      try {
        await axios(config);
        dispatch(authActions.addCode(Number(codeInputRef.current.value)));
        navigate("/reset");
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Verification Code</h2>
      <h5>Please Enter Your Code</h5>
      <form onSubmit={handlesubmit2}>
        <p>
          <label id="reset_pass_lbl">Code</label>
          <br />
          <input ref={codeInputRef} type="code" name="code" required />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Verify Code
          </button>
        </p>

        <footer>
          {/* <p>First time? <Link to="/register">Create an account</Link>.</p> */}
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </footer>
      </form>
    </div>
  );
}
