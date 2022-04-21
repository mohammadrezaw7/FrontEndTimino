import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "././store/auth";

export default function ResetPage() {
    const newPasswordInputRef = useRef();
    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handlesubmit3 = (e) => {
        e.preventDefault();
        var data = qs.stringify({
            email: authState.email,
            code: authState.code,
            password: newPasswordInputRef.current.value,
        });
        var config = {
            method: "post",
            url: "https://timino.iran.liara.run//api/auth/forgot-password/set-password",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: data,
        };

        (async () => {
            try {
                await axios(config);
                dispatch(authActions.resetEmailAndCode());
                navigate("/login");
            } catch (err) {
                console.log(err.message);
            }
        })();
    };

    return (
        <div className="text-center m-5-auto">
            <form onSubmit={handlesubmit3}>
                <p>
                    <label>Set Password</label>
                    <br />
                    <input
                        ref={newPasswordInputRef}
                        type="password"
                        name="first_name"
                        required
                    />
                </p>
                <p>
                    <label>Duplicate Password</label>
                    <br />
                    <input type="password" name="password" />
                </p>
                <p>
                    <button id="sub_btn2" type="submit">
                        Set Password and Login
                    </button>
                </p>

                <footer>
                    <p>
                        <Link to="/">Back to Home</Link>
                    </p>
                </footer>
            </form>
        </div>
    );
}