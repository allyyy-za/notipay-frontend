import React, { useState } from "react";
import { Grid, Link, Typography } from "@mui/material";
import styles from "./registration.module.css";
import smallLogo from "../../../../assets/images/logoOnly.png";
import CustomTextField from "../../../../components/controls/CustomTextField";
import CustomButton from "../../../../components/controls/CustomButton";
import Popup from "../../../../components/controls/Popup";
import { useNavigate } from "react-router-dom";

export default function Registration(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const user = { fullName, email, username, password };
    fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => {
        if(response.status === 200) {
          console.log("New user registered.");
          navigate("/");
          window.location.reload();
        }
    });
  };

  return (
    <Popup openPopup={props.openPopup} setOpenPopup={props.setOpenPopup}>
      <form>
        <Grid container>
          <Grid item xs={12}>
            <div className={styles.title}>
              <img src={smallLogo} alt="Logo" />
              <Typography className={styles.signUpLabel}>Sign Up</Typography>
              <p>Start keeping track of your subscriptions and bills.</p>
            </div>
            <CustomTextField
              className={styles.fullNameField}
              value={fullName}
              label="Full Name"
              name="fullName"
              variant="outlines"
              onChange={(e) => setFullName(e.target.value)}
            />
            <CustomTextField
              className={styles.emailField}
              value={email}
              label="Email"
              name="email"
              variant="outlines"
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <Typography className={styles.note}>
              By clicking Sign up, I agree that I have read and accepted the Terms of Use and Privacy Policy.
            </Typography>
            <div className={styles.lower}>
              <CustomButton className={styles.signUpButton} variant="contained" onClick={handleSignUp}>
                SIGN UP
              </CustomButton>
              <Link href="#" underline="none" className={styles.alreadyLink}>
                Already have an account? <b>Sign In</b>
              </Link>
            </div>
          </Grid>
        </Grid>
      </form>
    </Popup>
  );
}
