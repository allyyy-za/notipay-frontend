import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../components/controls/CustomButton";
import CustomTextField from "../../../../components/controls/CustomTextField";
import Popup from "../../../../components/controls/Popup";
import { useLocalState } from "../../../../util/useLocalStorage";
import styles from "./styles/AddSubscription.module.css";

export default function AddSubscription(props) {
  const [subscriptionName, setSubscriptionName] = useState("");
  const [amount, setAmount] = useState("");
  const [renewalDate, setRenewalDate] = useState("");
  const [hasValue, setHasValue] = useState(false);
  const [focus, setFocused] = useState(false);
  const [auth, setAuth] = useLocalState("", "authToken");
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const navigate = useNavigate();

  const handleAddSubscription = (e) => {
    e.preventDefault();
    const subscription = { subscriptionName, amount, renewalDate };
    fetch("api/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify(subscription),
    }).then((response) => {
      if (response.status === 200) {
        console.log("New subscription added.");
        navigate("/home");
        window.location.reload();
      }
    });
  };

  return (
    <div className={styles.popup}>
      <Popup openPopup={props.openPopup} setOpenPopup={props.setOpenPopup}>
        <form>
          <Grid container>
            <Grid item xs={12}>
              <div className={styles.title}>
                <Typography className={styles.addBillLabel}>Paid Subscriptions</Typography>
              </div>
              <CustomTextField
                className={styles.nameField}
                value={subscriptionName}
                label="Name of Subscription"
                name="name"
                variant="outlines"
                onChange={(e) => setSubscriptionName(e.target.value)}
              />
              <CustomTextField
                className={styles.amountField}
                value={amount}
                label="Amount"
                name="amount"
                variant="outlined"
                type="text"
                onChange={(e) => setAmount(e.target.value)}
              />
              <CustomTextField
                className={styles.dateField}
                onFocus={onFocus}
                onBlur={onBlur}
                value={renewalDate}
                name="date"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => {
                  if (e.target.value) {
                    setRenewalDate(e.target.value);
                    setHasValue(true);
                  } else {
                    setHasValue(false);
                    setRenewalDate("");
                  }
                }}
                label="Renewal Date"
                type={hasValue || focus ? "date" : "text"}
              />
              <CustomButton className={styles.saveButton} variant="contained" onClick={handleAddSubscription}>
                Save
              </CustomButton>
            </Grid>
          </Grid>
        </form>
      </Popup>
    </div>
  );
}
