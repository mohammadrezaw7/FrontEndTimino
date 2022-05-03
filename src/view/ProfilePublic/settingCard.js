// IMPORTS
import React from "react";
import { useState, useContext } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import CustomInput from "./customInput";
import { UserMain } from "./User";


export default function SettingsCard(props) {
  // STATES--------------------------------------------
  //USER STATE
  const { user, setUser } = useContext(UserMain);

  const handleUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //FORM STATE
  const [edit, update] = useState({
    // Initially EDIT, so it's disabled at first
    disabled: true,
    isEdit: true, //isEdit refers to the Button
    showPassword: false
  });

  //TAB STATE
  const [tabValue, setTabValue] = React.useState("one");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // GENDER SELECT
  const genderSelect = [
    {
      value: "not",
      label: "Enter"
    },
    {
      value: "male",
      label: "Male"
    },
    {
      value: "female",
      label: "Female"
    }
  ];
  
  //RETURN
  return (
    <Card variant="outlined" sx={{ height: "100%", width: "100%" }}>
      {/* TABS */}
      <br></br>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value="one" label="Account" />
      </Tabs>
      <Divider/>

      {/* MAIN CONTENT CONTAINER */}
      <div>
        <CardContent
          sx={{
            p: 3,
            maxHeight: { md: "40vh" },
            textAlign: { xs: "center", md: "start" }
          }}
        >
          {/* FIELDS */}
          <FormControl fullWidth>
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              columnSpacing={5}
              rowSpacing={3}
            >
              {/* ROW 1: FIRST NAME */}
              <Grid component="form" item xs={6}>
                <CustomInput
                  name="firstName"
                  value={user.firstName}
                  title="First Name"
                  onChange={handleUser}
                  dis={edit.disabled}
                />
              </Grid>

              {/* ROW 1: LAST NAME */}
              <Grid component="form" item xs={6}>
                <CustomInput
                  name="lastName"
                  value={user.lastName}
                  onChange={handleUser}
                  title="Last Name"
                  dis={edit.disabled}
                />
              </Grid>

              {/* ROW 2: MIDDLE NAME */}
              <Grid item xs={6}>
                <CustomInput
                  name="userName"
                  value={user.username}
                  onChange={handleUser}
                  title="User Name"
                  dis={edit.disabled}
                />
              </Grid>

              {/* ROW 2: GENDER */}
              <Grid item xs={6}>
                <CustomInput
                  select
                  name="gender"
                  value={user.gender}
                  onChange={handleUser}
                  title="Gender"
                  dis={edit.disabled}
                  //MAP THRU OPTIONS
                  content={genderSelect.map((option) => (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                  ))}
                />
              </Grid>

              {/* ROW 3: PHONE */}
              <Grid item xs={6}>
                <CustomInput
                  name="phone"
                  value={user.phone}
                  onChange={handleUser}
                  title="Phone Number"
                  dis={edit.disabled}
                  //DIALING CODE (63+)
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+98</InputAdornment>
                    )
                  }}
                />
              </Grid>

              {/* ROW 3: EMAIL */}
              <Grid item xs={6}>
                <CustomInput
                  name="email"
                  value={user.email}
                  onChange={handleUser}
                  title="Email Address"
                  dis={edit.disabled}
                />
              </Grid>
            </Grid>
          </FormControl>
        </CardContent>
      </div>
    </Card>
  );
}
