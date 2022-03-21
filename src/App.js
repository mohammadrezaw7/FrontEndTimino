
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import './App.css';
import SignUp from "./View/Signup/SignUp";
import ForgetPassword from "./View/Forget-password/forget-password";
import Dashboard from "./View/dashboard/dashboard";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={Dashboard}/>
                {/*<Redirect path="" to='/dashboard'/>*/}
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/forget-password" component={ForgetPassword}/>
            </Switch>
        </Router>
    );
}

export default App;
