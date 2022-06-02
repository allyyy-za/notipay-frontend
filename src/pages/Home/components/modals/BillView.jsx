import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import CustomButton from "../../../../components/controls/CustomButton";
import CustomTextField from "../../../../components/controls/CustomTextField";
import Popup from "../../../../components/controls/Popup";
import styles from "./styles/BillView.module.css";

export default class BillView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billId: 0,
      billName: "",
      amount: 0,
      dueDate: "",
      focus: false,
      hasValue: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      billId: nextProps.billView.billId,
      billName: nextProps.billView.billName,
      amount: nextProps.billView.amount,
      dueDate: nextProps.billView.dueDate,
      focus: false,
      hasValue: false,
    });
  }

  billNameHandler(e) {
    this.setState({ billName: e.target.value });
  }

  amountHandler(e) {
    this.setState({ amount: e.target.value });
  }

  dueDateHandler(e) {
    this.setState({ dueDate: e.target.value });
  }

  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });
  setHasValue = () => this.setState({ hasValue: true });

  handleEditBill = (e) => {
    e.preventDefault();
    const bill = this.state;
    const auth = localStorage.getItem("authToken");
    fetch("api/bills/billId=" + this.state.billId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(auth)}`,
      },
      body: JSON.stringify(bill),
    }).then((response) => {
      if (response.status === 200) {
        console.log("Bill edited.");
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
                  <Typography className={styles.addBillLabel}>Bills</Typography>
                </div>
                <CustomTextField
                  className={styles.nameField}
                  value={this.state.billName}
                  label="Name of Bill"
                  name="name"
                  variant="outlines"
                  onChange={(e) => this.billNameHandler(e)}
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
                  onFocus={this.state.onFocus}
                  onBlur={this.state.onBlur}
                  value={this.state.dueDate}
                  name="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={(e) => {
                    if (e.target.value) {
                      this.dueDateHandler(e);
                      this.setHasValue(true);
                    } else {
                      this.setHasValue(false);
                      this.dueDateHandler("");
                    }
                  }}
                  label="Due Date"
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
