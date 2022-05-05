import React from "react";
import Navbar from "./components/navbar/Navbar";
import landingImage from "../../assets/images/Landing.png";
import Button from "@mui/material/Button";
import styles from "./styles/css/landing.module.css";
import Login from "../../components/login/Login";
import { useState } from "react";

const Landing = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return(
        <div>
            <div>
                <Navbar />
                <h2 className={styles.heading}>Be notified, and you will never be late on payment, again.</h2>
                <img src={landingImage} alt="Landing" className={styles.landingImage}/>
                <Button variant="contained" className={styles.signin} onClick={handleOpen} disableElevation>SIGN IN</Button>
                <Button variant="outlined" className={styles.signup} onClick={handleOpen} disableElevation> SIGN UP</Button>
            </div>
            {/* <Login open={open}/> */}
        </div>
    )
}

export default Landing;