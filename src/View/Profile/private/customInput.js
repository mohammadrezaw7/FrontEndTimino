// IMPORTS
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
//APP
export default function CustomInput(props) {
  return (
    <Box>
      <label style={{ fontWeight: "bold" }} htmlFor={props.id}>
        {props.title}
      </label>
      <TextField
        fullWidth
        margin="dense"
        size="small"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        disabled={props.dis}
        type={props.type}
        InputProps={props.InputProps}
        select={props.select}
        ref={props.ref}
      >
        {props.content}
      </TextField>
    </Box>
  );
}
