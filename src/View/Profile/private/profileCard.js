import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { UserMain } from "./User";
import { useContext } from "react";
import { Upload, message } from "antd";
import "./ProfilePage.css";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const styles = {
  details: {
    padding: "1rem 2rem 3rem",
    borderTop: "1px solid #e1e1e1",
  },
  value: {
    padding: "1rem 2rem",
    borderTop: "1px solid #e1e1e1",
    color: "#899499",
  },
};

export default function ProfileCard() {
  const { user /*setUser*/ } = useContext(UserMain);

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
            badgeContent={
              <Upload {...props}>
                <PhotoCameraIcon
                  sx={{
                    border: "5px solid white",
                    backgroundColor: "#ff558f",
                    borderRadius: "50%",
                    padding: ".2rem",
                    width: 35,
                    height: 35,
                  }}
                />
              </Upload>
            }
          >
            <Avatar sx={{ width: 100, height: 100, mb: 1.5 }} src=""></Avatar>
          </Badge>
          <Typography variant="h6">
            {user.first_name}&nbsp;{user.last_name}
          </Typography>
          <Typography color="text.secondary">{user.username}</Typography>
        </Grid>

        <Grid item style={styles.details} sx={{ width: "100%" }}>
          <a href="/public">
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "99%", p: 1, my: 2 }}
            >
              Public
            </Button>
          </a >
          <Button
            variant="contained"
            color="success"
            sx={{ width: "99%", p: 1, my: 2 }}
          >
            Calendar
          </Button>
        </Grid>
        <Grid item style={styles.details} sx={{ width: "100%" }}>
          <Button
            variant="contained"
            color="error"
            sx={{ width: "99%", p: 1, my: 2 }}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
