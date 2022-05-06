import React, { useState } from 'react';
import { Grid, Link, Typography } from '@mui/material';
import styles from './registration.module.css';
import smallLogo from '../../../../assets/images/logoOnly.png';
import CustomTextField from '../../../../components/controls/CustomTextField';
import CustomButton from '../../../../components/controls/CustomButton';


const initialFieldValues = {
    fullName: '',
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
                        <Typography className={styles.signUpLabel}>
                        Sign Up
                        </Typography>
                        <p>Start keeping track of your subscriptions and bills.</p>
                    </div>
                    <CustomTextField
                    className={styles.fullNameField} 
                    value={values.fullName}
                    label="Full Name" 
                    name="fullName"
                    variant="outlines"
                    onChange = {handleInputChange}
                    />
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
                    <Typography className={styles.note}>By clicking Sign up, I agree that I have read and accepted the Terms of Use and Privacy Policy.</Typography>
                    <div className={styles.lower}>
                    <CustomButton 
                    className={styles.signUpButton}
                    variant="contained"
                    onClick={handleInputChange}
                    >SIGN UP</CustomButton>
                    <Link href="#" underline="none" className={styles.alreadyLink}>Already have an account? <b>Sign In</b></Link>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}