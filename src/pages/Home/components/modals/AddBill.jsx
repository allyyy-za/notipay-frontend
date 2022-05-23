import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../components/controls/CustomButton";
import CustomTextField from "../../../../components/controls/CustomTextField";
import Popup from "../../../../components/controls/Popup";
import styles from "./styles/AddBill.module.css";

export default function AddBill(props) {
  const [billName, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDate] = useState("");
  const [hasValue, setHasValue] = useState(false);
  const [focus, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const navigate = useNavigate();

  const handleAddBill = (e) => {
    e.preventDefault();
    const bill = { billName, amount, dueDate };
    fetch("api/bills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bill),
    }).then((response) => {
        if(response.status === 200) {
          console.log("New bill added.");
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
              <Typography className={styles.addBillLabel}>Bills</Typography>
            </div>
            <CustomTextField
              className={styles.nameField}
              value={billName}
              label="Name of Bill"
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
              value={dueDate}
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
              label="Due Date"
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
