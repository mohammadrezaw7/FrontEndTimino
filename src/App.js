import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useRoutes } from "react-router-dom";

import "./App.css";
import ProfilePage from "./View/Profile/private/profilePage";
import PublicProfile from "./View/Profile/public/profilePage";
import Login from "./View/Login/Login";
import Search2 from "./View/UserCard/Search";
import ForgetPasswordPage from "./View/forget-password/ForgetPasswordPage";
import ResetPage from "./View/forget-password/ResetPage";
import CodePage from "./View/forget-password/Code";
import CreateTimeline from "./View/CreateTimeLine/CreateTimeline";
import Main from "./View/NewTimelineView/Main";
import SignInSignUp from "./View/SignIn-SignUp/SignIn-SignUp";
import LandingPage from "./landing-page-item/LandingPage";
import MessageList from "./View/Chat/MessageList";

const RoutePath = () => {
  let routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/Chat", element: <MessageList /> },
    { path: "/dashboard", element: <ProfilePage /> },
    { path: "/public-profile", element: <PublicProfile /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignInSignUp /> },
    { path: "/card", element: <Search2 /> },
    { path: "/time-view", element: <Main /> },
    { path: "/ForgetPasswordPage", element: <ForgetPasswordPage /> },
    { path: "/ResetPage", element: <ResetPage /> },
    { path: "/CodePage", element: <CodePage /> },
    { path: "/CreateTimeline", element: <CreateTimeline /> },
  ]);
  return routes;
};

function App() {
  return <RoutePath />;
}

export default App;
