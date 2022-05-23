import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCard from "../../../../components/controls/CustomCard";
import { useLocalState } from "../../../../util/useLocalStorage";
import AddIcon from '@mui/icons-material/Add';
import styles from "./Bills.module.css";

export default function Bills() {
  const [auth, setAuth] = useLocalState("", "authToken");
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("api/bills", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((data) => setBills(data));
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        {bills.map((bill) => (
          <Grid item key={bill.billId}>
            <CustomCard cardContent={bill} />
          </Grid>
        ))}
        <Grid item>
          <Button className={styles.addButton} variant="outlined">
            <AddIcon />
            Add Bill
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
