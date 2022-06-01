import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import CustomButton from '../../../../components/controls/CustomButton';
import CustomTextField from '../../../../components/controls/CustomTextField';
import Popup from '../../../../components/controls/Popup';
import { useLocalState } from '../../../../util/useLocalStorage'
import styles from './styles/BillView.module.css';

export default function BillView(props) {
  const [auth, setAuth] = useLocalState("", "authToken")
  const [billName, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDate] = useState(props.billView.dueDate);
  const [hasValue, setHasValue] = useState(false);
  const [focus, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const navigate = useNavigate();

  const handleEditBill = (e) => {
    e.preventDefault();
    const bill = { billName, amount, dueDate };
    fetch("api/bills/billId=" + props.billView.billId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      }, body: JSON.stringify(bill),
    }).then((response) => {
      if (response.status === 200) {
        console.log("Bill edited.");
        navigate("/home");
        window.location.reload();
      }
    })
  };

  return (
    <div>
      <Popup openPopup={props.openPopup} setOpenPopup={props.setOpenPopup}>
        <form>
          <Grid container>
            <Grid item xs={12}>
              <div className={styles.title}>
                <Typography className={styles.editBillLabel}>Edit Bill</Typography>
              </div>
              <CustomTextField
                className={styles.nameField}
                defaultValue={props.billView.billName}
                label="Name of Bill"
                name="name"
                variant="outlined"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <CustomTextField
                className={styles.amountField}
                defaultValue={props.billView.amount}
                type="text"
                label="Amount"
                name="amount"
                variant="outlined"
                onChange={(e) => setAmount(e.target.value)}
              />
              <CustomTextField
                className={styles.dateField}
                onFocus={onFocus}
                onBlur={onBlur}
                defaultValue={props.billView.dueDate}
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
              <CustomButton className={styles.saveButton} variant="contained" onClick={handleEditBill}>
                Save
              </CustomButton>
            </Grid>
          </Grid>
        </form>
      </Popup>
    </div>
  )
}
