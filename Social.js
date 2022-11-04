import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Grid from "@mui/material/Grid";
import { signInWithGoogle } from "../Firebase";
const Social = () => {
  return (
    <div>
      <Grid container spacing={36} direction="row" justifyContent={"center"}>
        <Grid item xs={6}>
          <GoogleIcon onClick={signInWithGoogle} />
        </Grid>
        <Grid item xs={6}>
          <FacebookIcon />
        </Grid>
      </Grid>
    </div>
  );
};

export default Social;
