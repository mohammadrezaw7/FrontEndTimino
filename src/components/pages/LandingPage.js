import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
// import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>Sign Up </span></button>
                </Link>
            </div>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    // background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}