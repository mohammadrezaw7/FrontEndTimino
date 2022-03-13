import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./view/login/Login";

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/login" component={Login}/>
        </Switch>
    </Router>
  );
}

export default App;
