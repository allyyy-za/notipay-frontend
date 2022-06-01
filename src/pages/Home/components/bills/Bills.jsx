import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocalState } from "../../../../util/useLocalStorage";
import AddIcon from "@mui/icons-material/Add";
import styles from "./Bills.module.css";
import CustomCardBill from "../../../../components/controls/CustomCardBill";
import AddBill from "../modals/AddBill";
import BillView from "../modals/BillView";

export default function Bills() {
  const [auth, setAuth] = useLocalState("", "authToken");
  const [bills, setBills] = useState([]);
  const [billView, setBillView] = useState({});
  const [openAddBillModal, setOpenAddBillModal] = useState(false);
  const [openBillViewModal, setOpenBillViewModal] = useState(false);
  const handleOpenAddBill = () => setOpenAddBillModal(true);

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

  const handleDeleteBill = (billId) => {
    fetch("api/bills/billId=" + billId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    });
    const updatedBills = bills.filter((bill) => bill.billId !== billId);
    setBills(updatedBills);
  };

  const handleViewBill = (billId) => {
    fetch("api/bills/billId=" + billId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    }).then((response) => {
      if (response.status === 200) return response.json();
    })
    .then((data) => {
      setBillView(data)
      setOpenBillViewModal(true);
    });
  }


  return (
    <div>
      <Grid container spacing={3}>
        {bills.map((bill) => (
          <Grid item key={bill.billId}>
            <CustomCardBill cardContent={bill} handleDelete={handleDeleteBill} handleEdit={handleViewBill} />
          </Grid>
        ))}
        <Grid item>
          <Button className={styles.addButton} variant="outlined" onClick={handleOpenAddBill}>
            <AddIcon />
            Add Bill
          </Button>
        </Grid>
      </Grid>
      <AddBill openPopup={openAddBillModal} setOpenPopup={setOpenAddBillModal} />
      <BillView openPopup={openBillViewModal} setOpenPopup={setOpenBillViewModal} billView={billView} />
    </div>
  );
}
