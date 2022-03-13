import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";

function App() {
  return (
    <React.StrictMode>
      <Login />
    </React.StrictMode>
  );
}

export default App;
