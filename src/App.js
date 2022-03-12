
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import SignUp from "./View/Signup/SignUp";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/sign-up" component={SignUp}/>
            </Switch>
        </Router>
    );
}

export default App;
