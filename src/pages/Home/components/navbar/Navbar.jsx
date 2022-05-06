import React from 'react'
import logoImage from "../../../../assets/images/logo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button, IconButton } from '@mui/material';
import styles from './navbar.module.css';
import notificationsIcon from "../../../../assets/images/notificationsIcon.png";

export default function Navbar() {
  return (
    <div>
        <img src={logoImage} className={styles.logo} alt="Logo" />
        <IconButton className={styles.notificationsIconButton} ><NotificationsIcon style={{ fontSize: 40 }} /></IconButton>
        <IconButton className={styles.profileIconButton} ><AccountCircleIcon style={{ fontSize: 40 }} /></IconButton>
    </div>
  )
}

