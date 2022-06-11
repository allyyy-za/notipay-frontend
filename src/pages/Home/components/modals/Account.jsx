import { Grid, Stack, Typography } from '@mui/material';
import React, { Component } from 'react'
import CustomButton from '../../../../components/controls/CustomButton';
import CustomTextField from '../../../../components/controls/CustomTextField';
import Popup from '../../../../components/controls/Popup';
import styles from './styles/Account.module.css';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      fullName: '',
      email: '',
      username: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      userId: nextProps.account.userId,
      fullName: nextProps.account.fullName,
      email: nextProps.account.email,
      username: nextProps.account.username, 
    });
  }

  fullNameHandler(e) {
    this.setState({ fullName: e.target.value });
  }

  emailHandler(e) {
    this.setState({ email: e.target.value });
  }

  usernameHandler(e) {
    this.setState({ username: e.target.value });
  }

  passwordHandler(e) {
    this.setState({ password: e.target.value });
  }

  handleEditAccount = (e) => {
    e.preventDefault();
    const user = this.state;
    const auth = localStorage.getItem("authToken");
    fetch("api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(auth)}`
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (response.status === 200) {
        console.log("User edited.");
        window.location.reload();
      }
    });
  }

  render() {
    return (
      <Popup openPopup={this.props.openPopup} setOpenPopup={this.props.setOpenPopup}>
        <form>
            <Grid container>
              <Grid item xs={12}>
                <div className={styles.title}>
                  <Typography className={styles.accountLabel}>Account Settings</Typography>
                </div>
                <CustomTextField
                  className={styles.nameField}
                  value={this.state.fullName}
                  label="Full Name"
                  name="fullName"
                  variant="outlined"
                  onChange={(e) => this.fullNameHandler(e)}
                />
                <CustomTextField
                  className={styles.emailField}
                  value={this.state.email}
                  label="Email"
                  name="email"
                  variant="outlined"
                  type="text"
                  onChange={(e) => this.emailHandler(e)}
                />
                <CustomTextField
                  className={styles.usernameField}
                  value={this.state.username}
                  label="Username"
                  name="username"
                  variant="outlined"
                  type="text"
                  onChange={(e) => this.usernameHandler(e)}
                />
                <CustomTextField
                  className={styles.passwordField}
                  value={this.state.password}
                  label="Password"
                  name="password"
                  variant="outlined"
                  type="password"
                  onChange={(e) => this.passwordHandler(e)}
                />
                <CustomButton className={styles.saveButton} variant="contained" onClick={this.handleEditAccount}>
                  Save
                </CustomButton>
              </Grid>
            </Grid>
          </form>
      </Popup>
    )
  }
}
