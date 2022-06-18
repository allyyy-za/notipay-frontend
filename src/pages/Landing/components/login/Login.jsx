import React, { useState } from "react";
import { Grid, Link, Typography } from "@mui/material";
import styles from "./login.module.css";
import smallLogo from "../../../../assets/images/logoOnly.png";
import CustomTextField from "../../../../components/controls/CustomTextField";
import CustomButton from "../../../../components/controls/CustomButton";
import { useLocalState } from "../../../../util/useLocalStorage";
import Popup from "../../../../components/controls/Popup";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useLocalState("", "authToken");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = { username, password };
    fetch("api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status === 200) {
        setAuth(response.headers.get("Authorization"));
        if (auth) {
          navigate("/home");
          window.location.reload();
        }
      } else {
        return response.text();
      }
    }).then((data) => { setError(data); });
  };

  return (
    <Popup openPopup={props.openPopup} setOpenPopup={props.setOpenPopup}>
      <form>
        <Grid container>
          <Grid item xs={12}>
            <div className={styles.title}>
              <img src={smallLogo} alt="Logo" />
              <Typography className={styles.signInLabel}>Sign In</Typography>
              <p>Start keeping track of your subscriptions and bills.</p>
            </div>
            <h3 className={styles.errorMessage}>{error}</h3>
            <CustomTextField
              className={styles.usernameField}
              value={username}
              label="Username"
              name="username"
              variant="outlines"
              onChange={(e) => setUsername(e.target.value)}
            />
            <CustomTextField
              className={styles.passwordField}
              value={password}
              label="Password"
              name="password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.lower}>
              <CustomButton className={styles.signInButton} variant="contained" onClick={handleSignIn}>
                SIGN IN
              </CustomButton>
              {/* <Link href="#" underline="none" className={styles.createLink}>
                No Account? <b>Create Now</b>
              </Link>
              <Link href="#" underline="none" className={styles.forgotLink}>
                Forgot Password?
              </Link> */}
            </div>
          </Grid>
        </Grid>
      </form>
    </Popup>
  );
}
