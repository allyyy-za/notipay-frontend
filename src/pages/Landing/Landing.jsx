import React from "react";
import Navbar from "./components/navbar/Navbar";
import landingImage from "../../assets/images/Landing.png";
import Button from "@mui/material/Button";
import styles from "./styles/css/landing.module.css";
import Login from "./components/login/Login";
import { useState } from "react";
import Popup from "../../components/controls/Popup";
import Registration from "./components/registration/Registration";

const Landing = () => {
  const [openSignInForm, setOpenSignInForm] = useState(false);
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const openSignUpModal = () => setOpenSignUpForm(true);
  const openSignInModal = () => setOpenSignInForm(true);

  return (
    <div>
      <div>
        <Navbar />
        <h2 className={styles.heading}>Be notified, and you will never be late on payment, again.</h2>
        <img src={landingImage} alt="Landing" className={styles.landingImage} />
        <Button variant="contained" className={styles.signin} onClick={openSignInModal} disableElevation>
          SIGN IN
        </Button>
        <Button variant="outlined" className={styles.signup} onClick={openSignUpModal} disableElevation>
          SIGN UP
        </Button>
      </div>
      <Popup openPopup={openSignInForm} setOpenPopup={setOpenSignInForm}>
        <Login />
      </Popup>
      <Popup openPopup={openSignUpForm} setOpenPopup={setOpenSignUpForm}>
        <Registration />
      </Popup>
    </div>
  );
};

export default Landing;
