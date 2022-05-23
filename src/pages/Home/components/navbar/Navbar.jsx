import React from 'react'
import logoImage from "../../../../assets/images/logo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';import { IconButton } from '@mui/material';
import styles from './navbar.module.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  return (
    <div>
        <img src={logoImage} className={styles.logo} alt="Logo" />
        <IconButton className={styles.notificationsIconButton} onClick={handleLogOut}><LogoutIcon style={{ fontSize: 40 }} /></IconButton>
        <IconButton className={styles.profileIconButton} ><AccountCircleIcon style={{ fontSize: 40 }} /></IconButton>
    </div>
  )
}

