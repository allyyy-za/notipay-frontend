import React from 'react';
import { Modal, Box, TextField } from '@mui/material';
import { Component } from 'react';
import styles from './login.module.css';
import smallLogo from '../../assets/images/logoOnly.png';


export default class Login extends Component {

    render() {
        return(
            <div>
                <Modal
                    open={this.props.open}
                    aria-labelledby="Sign In"
                    aria-describedby="Sign In to your Account"
                    className={styles.loginModal}
                >
                    <Box>
                        <img src={smallLogo} alt="Logo" />
                        <h1>Sign In</h1>
                        <p>Start keeping track of your subscriptions and bills.</p>
                        <TextField className={styles.emailTextField} label="Email" variant="outlined" />
                        <TextField className={styles.passwordTextField} type="password" label="Password" variant="outlined" />
                    </Box>
                </Modal>
            </div>
        );
    }
}