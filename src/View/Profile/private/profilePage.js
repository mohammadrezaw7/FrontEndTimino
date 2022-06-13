import React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import ProfileCard from "./profileCard";
import SettingsCard from "./settingCard";
import { UserMain, userData } from "./User";

import Dashboard from "../../dashboard/Dashboard";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./ProfilePage.css";

export default function ProfilePage() {
  const [user, setUser] = useState(userData);
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(authState.accessToken);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authState.accessToken}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    fetch(
      "https://timino-app-2.iran.liara.run//api/user/my-profile",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        return setUser(data.data);
      })
      .catch((error) => console.log("error", error));
  }, [authState.accessToken]);

  return (
    <Dashboard className="search">
      {/* <h1>Profile</h1> */}
      {/* <div ></div> */}
      <UserMain.Provider value={{ user, setUser }}>
        <CssBaseline>
          <Grid container direction="column" sx={{ overflowX: "hidden" }}>
            <Grid item xs={12} md={6}>
              <img
                alt="avatar"
                style={{
                  width: "100vw",
                  height: "35vh",
                  // objectFit: "cover",
                  objectPosition: "50% 50%",
                  // position: "relative"
                }}
                //header
              />
            </Grid>
              <div style={{marginLeft:"210px",marginTop:"50px"}}>
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              spacing={1.5}
              sx={{
                position: "sticky",
                top: "20vh",
                px: { xs: 5, md: 3 },
              }}
            >
              <Grid item md={3}>
                <ProfileCard />
              </Grid>
              <Grid item md={9}>
                <SettingsCard />
              </Grid>
            </Grid>
              </div>
          </Grid>
        </CssBaseline>
      </UserMain.Provider>
    </Dashboard>
  );
}
