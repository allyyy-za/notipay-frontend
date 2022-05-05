import React, { useState } from 'react';
import { Grid, Link, Typography } from '@mui/material';
import styles from './login.module.css';
import smallLogo from '../../assets/images/logoOnly.png';
import CustomTextField from '../controls/CustomTextField';
import CustomButton from '../controls/CustomButton';


const initialFieldValues = {
    email: '',
    password: '',
}

export default function Login() {
    
    const [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        const {name, value } = e.target;
        setValues({
            ...values,
            [name]:value
        });
    }

    return(
        <form>
            <Grid container>
                <Grid item xs={12}>
                    <div className={styles.title}>
                        <img src={smallLogo} alt="Logo" />
                        <Typography className={styles.signInLabel}>
                        Sign In
                        </Typography>
                        <p>Start keeping track of your subscriptions and bills.</p>
                    </div>
                    <CustomTextField
                    className={styles.emailField} 
                    value={values.email}
                    label="Email" 
                    name="email"
                    variant="outlines"
                    onChange = {handleInputChange}
                    />
                    <CustomTextField 
                    className={styles.passwordField}
                    value={values.password}
                    label="Password" 
                    name="password"
                    variant="outlined" 
                    type="password"
                    onChange= {handleInputChange}
                    />
                    <CustomButton 
                    className={styles.signInButton}
                    variant="contained"
                    onClick={handleInputChange}
                    >SIGN IN</CustomButton>
                    <CustomButton 
                    className={styles.signInButton}
                    variant="contained"
                    onClick={handleInputChange}
                    >SIGN UP</CustomButton>
                    <Link href="#" underline="none" className={styles.createLink}>No Account? <b>Create Now</b></Link>
                    <Link href="#" underline="none" className={styles.forgotLink}>Forgot Password?</Link>
                </Grid>
            </Grid>
        </form>
    );
}