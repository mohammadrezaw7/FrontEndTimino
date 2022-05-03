import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { UserMain } from "./User";
import { useContext } from "react";


const styles = {
  details: {
    padding: "1rem",
    borderTop: "1px solid #e1e1e1"
  },
  value: {
    padding: "1rem 2rem",
    borderTop: "1px solid #e1e1e1",
    color: "#899499"
  }
};

export default function ProfileCard(props) {
  const { user, /*setUser*/ } = useContext(UserMain);

  return (
    <Card variant="outlined">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* CARD HEADER START */}
        <Grid item sx={{ p: "1.5rem 0rem", textAlign: "center" }}>
          {/* PROFILE PHOTO */}
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Avatar
              sx={{ width: 100, height: 100, mb: 1.5 }}
              src=""
            ></Avatar>
          </Badge>
          <Typography variant="h6">
            {user.firstName}&nbsp;{user.lastName}
          </Typography>
          <Typography color="text.secondary">{user.username}</Typography>
        </Grid>
        
        <Grid item style={styles.details} sx={{ width: "100%" }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "99%", p: 1, my: 2 }}
          >
            Timelines
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ width: "99%", p: 1, my: 2 }}
          >
            Follow
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
