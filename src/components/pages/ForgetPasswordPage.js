import "../../App.css";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import qs from "qs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

//import { Redirect } from "react-router-dom";
// import { withRouter } from "react-router-dom";
// import Child from './Code'; //send email to code.js and ResetPage.js for reading  email from ForgotPasswordPage.js by Code.js and ResetPage.js
// import Child2 from './ResetPage';   //send email to code.js and ResetPage.js for reading  email from ForgotPasswordPage.js by Code.js and ResetPage.js

export default function ForgetPasswordPage() {
  const emailInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = qs.stringify({
      email: emailInputRef.current.value,
    });
    const config = {
      method: "POST",
      url: "https://timino-application.iran.liara.run//api/auth/forgot-password/send-email",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", //x-www-form-urlencoded
      },
      data: data,
    };

    (async () => {
      try {
        await axios(config);
        dispatch(authActions.addEmail(emailInputRef.current.value));
        navigate("/code");
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Reset your password</h2>
      <h5>Enter your email address and we will send you Verification Code</h5>
      <form onSubmit={HandleSubmit}>
        <p>
          <label id="reset_pass_lbl">Email address</label>
          <br />
          <input ref={emailInputRef} type="email" name="email" required />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Send code to my email
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

// axios(config)
//   .then(function (response) {
//     //     return (       //send email to code.js and ResetPage.js for reading  email from ForgotPasswordPage.js by Code.js and ResetPage.js
//     //         <div>
//     //       <Child data={email}/>
//     //       <Child2 data={email}/>
//     //     </div>
//     // );
//     // this.setState({ redirect: "/code" });
//     // this.props.history.push("/code");
//     // this.props.history.push('/code')
//     // return <Redirect to='/code' />
//     // history.push("/code")
//     // return  <Redirect to={{
//     //     pathname: "/code",
//     //     state: { email : email }
//     //   }}  />
//     // console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
