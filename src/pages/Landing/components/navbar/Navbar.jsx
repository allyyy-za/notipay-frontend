import logoImage from "../../../../assets/images/logo.png";
import styles from "../navbar/Navbar.module.css";
import { React, useState } from "react";
import Popup from "../../../../components/controls/Popup";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import { Button } from "@mui/material";

export default function Navbar() {

  const [openSignInForm, setOpenSignInForm] = useState(false);
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const openSignUpModal = () => setOpenSignUpForm(true);
  const openSignInModal = () => setOpenSignInForm(true);

  return (
    <>
      <header className="App-header">
        <img src={logoImage} className={styles.logo} alt="Logo" />
        <Button onClick={openSignInModal} className={styles.signin}>
          Sign In
        </Button>
        <Button onClick={openSignUpModal} className={styles.signup}>
          Sign Up
        </Button>
        <Button className={styles.about}>
          About
        </Button>
      </header>
      <Popup openPopup={openSignInForm} setOpenPopup={setOpenSignInForm}>
        <Login />
      </Popup>
      <Popup openPopup={openSignUpForm} setOpenPopup={setOpenSignUpForm}>
        <Registration />
      </Popup>
    </>
  );
}
