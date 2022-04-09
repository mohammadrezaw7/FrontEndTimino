import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./view/pages/Home";
import PersonalProfile from "./view/pages/PersonalProfile";
import PublicProfile from "./view/pages/PublicProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="personal-profile" element={<PersonalProfile />} />
      <Route path="public-profile" element={<PublicProfile />} />
    </Routes>
  );
}

export default App;
