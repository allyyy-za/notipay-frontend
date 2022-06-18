import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import CustomButton from "../../../../components/controls/CustomButton";
import CustomTextField from "../../../../components/controls/CustomTextField";
import Popup from "../../../../components/controls/Popup";
import styles from "./styles/SubscriptionView.module.css";

export default class SubscriptionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriptionId: 0,
      subscriptionName: "",
      amount: 0,
      renewalDate: "",
      focus: false,
      hasValue: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      subscriptionId: nextProps.subscriptionView.subscriptionId,
      subscriptionName: nextProps.subscriptionView.subscriptionName,
      amount: nextProps.subscriptionView.amount,
      renewalDate: nextProps.subscriptionView.renewalDate,
      focus: false,
      hasValue: false,
    });
  }

  subscriptionNameHandler(e) {
    this.setState({ subscriptionName: e.target.value });
  }

  amountHandler(e) {
    this.setState({ amount: e.target.value });
  }

  renewalDateHandler(e) {
    this.setState({ renewalDate: e.target.value });
  }

  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });
  setHasValue = () => this.setState({ hasValue: true });

  handleEditBill = (e) => {
    e.preventDefault();
    const bill = this.state;
    const auth = localStorage.getItem("authToken");
    fetch("api/subscriptions/subscriptionId=" + this.state.subscriptionId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(auth)}`,
      },
      body: JSON.stringify(bill),
    }).then((response) => {
      if (response.status === 200) {
        console.log("Subscription edited.");
        window.location.reload();
      }
    });
  };

  render() {
    return (
      <div className={styles.popup}>
        <Popup openPopup={this.props.openPopup} setOpenPopup={this.props.setOpenPopup}>
          <form>
            <Grid container>
              <Grid item xs={12}>
                <div className={styles.title}>
                  <Typography className={styles.addBillLabel}>Subscriptions</Typography>
                </div>
                <CustomTextField
                  className={styles.nameField}
                  value={this.state.subscriptionName}
                  label="Name of Subscription"
                  name="name"
                  variant="outlines"
                  onChange={(e) => this.subscriptionNameHandler(e)}
                />
                <CustomTextField
                  className={styles.amountField}
                  value={this.state.amount}
                  label="Amount"
                  name="amount"
                  variant="outlined"
                  type="text"
                  onChange={(e) => this.amountHandler(e)}
                />
                <CustomTextField
                  className={styles.dateField}
                  onFocus={this.state.focus}
                  onBlur={this.state.onBlur}
                  value={this.state.renewalDate}
                  name="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={(e) => {
                    if (e.target.value) {
                      this.renewalDateHandler(e);
                      this.setHasValue(true);
                    } else {
                      this.setHasValue(false);
                      this.renewalDateHandler("");
                    }
                  }}
                  label="Renewal Date"
                  type={this.state.hasValue || this.state.focus ? "date" : "text"}
                />
                <CustomButton className={styles.saveButton} variant="contained" onClick={this.handleEditBill}>
                  Save
                </CustomButton>
              </Grid>
            </Grid>
          </form>
        </Popup>
      </div>
    );
  }
}
