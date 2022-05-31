import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useRoutes } from "react-router-dom";

import "./App.css";
import ProfilePage from "./View/Profile/private/profilePage";
import PublicProfile from "./View/Profile/public/profilePage";
import Search2 from "./View/UserCard/Search";
import ForgetPasswordPage from "./View/forget-password/ForgetPasswordPage";
import ResetPage from "./View/forget-password/ResetPage";
import CodePage from "./View/forget-password/Code";
import CreateTimeline from "./View/CreateTimeLine/CreateTimeline";
import Main from "./View/NewTimelineView/Main";
import SignInSignUp from "./View/SignIn-SignUp/SignIn-SignUp";
import LandingPage from "./landing-page-item/LandingPage";
import MessageList from "./View/Chat/MessageList";
import Timelineindex from "./View/Timeline-index/Timelineindex";


const RoutePath = () => {
  let routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/Chat", element: <MessageList /> },
    { path: "/dashboard", element: <ProfilePage /> },
    { path: "/public-profile", element: <PublicProfile /> },
    { path: "/signup", element: <SignInSignUp /> },
    { path: "/card", element: <Search2 /> },
    { path: "/timeline-view/:id", element: <Main /> },
    { path: "/ForgetPasswordPage", element: <ForgetPasswordPage /> },
    { path: "/ResetPage", element: <ResetPage /> },
    { path: "/CodePage", element: <CodePage /> },
    { path: "/CreateTimeline", element: <CreateTimeline /> },
    { path: "/Timelineindex", element: <Timelineindex /> },

  ]);
  return routes;
};

function App() {
  return <RoutePath />;
}

export default App;
