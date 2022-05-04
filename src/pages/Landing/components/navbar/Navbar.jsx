import React from 'react'
import logoImage from "../../../../assets/images/logo.png";
import styles from "../navbar/Navbar.module.css"

const Navbar = () => {
  return (
    <div>
        <header className="App-header">
            <img src={logoImage} className={styles.logo} alt="Logo"/>
            <a href="/" className={styles.signin}>Sign In</a>
            <a href="/" className={styles.signup}>Sign Up</a>
            <a href="/" className={styles.about}>About</a>
        </header>
    </div>
  )
}

export default Navbar