import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom";
import './App.css';
import SignUp from "./View/Signup/SignUp";
import LandingPage from "./View/LandingPage/landingPage";
import Dashboard from "./View/dashboard/dashboard";
import Login from "./View/Login/Login";
import Search2 from "./View/UserCard/Search";
import timeline from "./View/timeline view/timelineview";
import ForgetPasswordPage from "./View/forget-password/ForgetPasswordPage";
import ResetPage from "./View/forget-password/Code";
import CodePage from "./View/forget-password/ResetPage";
import CreateTimeline from "./View/CreateTimeLine/CreateTimeline";
import Timeline from "./View/timeline view/timelineview";
import Main from "./View/NewTimelineView/Main";
const RoutePath = () => {
    let routes = useRoutes([
        {path: "/", element: <LandingPage/>},
        {path: "/dashboard", element: <Dashboard/>},
        {path: "/login", element: <Login/>},
        {path: "/sign-up", element: <SignUp/>},
        {path: "/card", element: <Search2/>},
        {path: "/time-view", element: <Main/>},
        {path: "/ForgetPasswordPage", element: <ForgetPasswordPage/>},
        {path: "/ResetPage", element: <ResetPage/>},
        {path: "/CodePage", element: <CodePage/>},
        {path: "/CreateTimeline", element: <CreateTimeline/>}
    ]);
    return routes;
}

function App() {
    return (
        <Router>
            <RoutePath/>
        </Router>
    );
}

export default App;
