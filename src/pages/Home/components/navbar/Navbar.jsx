import React, { useState } from 'react'
import logoImage from "../../../../assets/images/logo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';import { IconButton } from '@mui/material';
import styles from './navbar.module.css';
import { useNavigate } from 'react-router-dom';
import Account from '../modals/Account';
import { useLocalState } from '../../../../util/useLocalStorage';

export default function Navbar() {
  const [auth, setAuth] = useLocalState("", "authToken");
  const [account, setAccount] = useState("");
  const [openAccountModal, setOpenAccountModal] = useState(false);
  
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  const handleOpenAccount = (e) => {
    fetch("api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`
      },
    }).then((response) => {
      if (response.status === 200) return response.json();
    }).then((data) => {
      setAccount(data);
      setOpenAccountModal(true);
    })

  }

  return (
    <div>
        <img src={logoImage} className={styles.logo} alt="Logo" />
        <IconButton className={styles.notificationsIconButton} onClick={handleLogOut}><LogoutIcon style={{ fontSize: 40 }} /></IconButton>
        <IconButton className={styles.profileIconButton} onClick={handleOpenAccount}><AccountCircleIcon style={{ fontSize: 40 }} /></IconButton>
        <Account openPopup={openAccountModal} setOpenPopup={setOpenAccountModal} account={account} />
    </div>
  )
}

