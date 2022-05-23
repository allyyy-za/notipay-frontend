import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../../../components/controls/CustomButton";
import CustomTextField from "../../../../components/controls/CustomTextField";
import Popup from "../../../../components/controls/Popup";
import styles from "./styles/AddSubscription.module.css";

export default function AddSubscription(props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [hasValue, setHasValue] = useState(false);
  const [focus, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

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
              value={name}
              label="Name of Subscription"
              name="name"
              variant="outlines"
              onChange={(e) => setName(e.target.value)}
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
              value={date}
              name="date"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={(e) => {
                if (e.target.value) {
                  setDate(e.target.value);
                  setHasValue(true);
                } else {
                  setHasValue(false);
                  setDate("");
                }
              }}
              label="Renewal Date"
              type={hasValue || focus ? "date" : "text"}
            />
            <CustomButton className={styles.saveButton} variant="contained" onClick>
              Save
            </CustomButton>
          </Grid>
        </Grid>
      </form>
      </Popup>
    </div>
  );
}
