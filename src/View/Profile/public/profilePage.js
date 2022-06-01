import React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "../../dashboard/Dashboard";
import ProfileCard from "./profileCard";
import SettingsCard from "./settingCard";
import { UserMain, userData } from "./User";
import { useSelector } from "react-redux";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./ProfilePage.css";

export default function PublicProfile() {
  const [user, setUser] = useState(userData);
  const authState = useSelector((state) => state.auth);

  console.log(authState.userId);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://timino-app-2.iran.liara.run//api/user/show/${authState.userId}`
        );
        const resData = await res.json();
        setUser(resData.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Dashboard className="search">
      <UserMain.Provider value={{ user, setUser }}>
        <CssBaseline>
          <Grid className="dash" container direction="column" sx={{ overflowX: "hidden" }}>
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              spacing={1.5}
              sx={{
                top: "20vh",
                px: { xs: 0, md: 7 },
              }}
            >
              <Grid item md={3}>
                <ProfileCard />
              </Grid>
              <Grid item md={9}>
                <SettingsCard />
              </Grid>
            </Grid>
          </Grid>
        </CssBaseline>
      </UserMain.Provider>
    </Dashboard>
  );
}
