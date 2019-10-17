import React from "react";
import { GoogleLogin } from 'react-google-login';
import { withStyles } from "@material-ui/core/styles";
 
// import Typography from "@material-ui/core/Typography";

const Login = ({ classes }) => {
  const onSuccess = googleUser => {
    const idToken = googleUser.getAuthResponse()
    .id_token
    console.log({ idToken })
  }
  
  return ( 
    <GoogleLogin
  clientId='319934585705-qvm21ge8n874vo0ag6s3v7clpffld5r6.apps.googleusercontent.com'
  onSuccess={onSuccess}
  isSignedIn={true}
  />
  )
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);