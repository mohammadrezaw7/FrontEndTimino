import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage";
import HomePage from "./components/pages/HomePage";
import CodePage from "./components/pages/Code";
import ResetPage from "./components/pages/ResetPage";

import "./App.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/code" element={<CodePage />} />
        <Route path="/reset" element={<ResetPage />} />
      </Routes>
    </div>
  );
}

// const Footer = () => {
//   return <></>;
// };

// const FooterStyle = {
//   background: "#222",
//   fontSize: ".8rem",
//   color: "#fff",
//   position: "absolute",
//   bottom: 0,
//   padding: "1rem",
//   margin: 0,
//   width: "100%",
//   opacity: ".5",
// };
