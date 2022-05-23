import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCardSubscription from "../../../../components/controls/CustomCardSubscription";
import AddIcon from '@mui/icons-material/Add';
import { useLocalState } from "../../../../util/useLocalStorage";
import styles from "./Subscriptions.module.css"
import AddSubscription from "../modals/AddSubscription";

export default function Subscriptions() {
  const [auth, setAuth] = useLocalState("", "authToken");
  const [subscriptions, setSubscriptions] = useState([]);
  const [openAddSubscriptionModal, setOpenAddSubscriptionModal] = useState(false);
  const handleOpenAddSubscription = () => setOpenAddSubscriptionModal(true);

  useEffect(() => {
    fetch("api/subscriptions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`
      }
    })
    .then((response) => {
      if (response.status === 200) return response.json();
    })
    .then((data) => setSubscriptions(data))
  }, [])

  const handleDeleteSubscription = (subscriptionId) => {
    fetch("api/subscriptions/subscriptionId=" + subscriptionId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      }
    })
    const updatedSubscriptions = subscriptions.filter(subscription => subscription.subscriptionId !== subscriptionId);
    setSubscriptions(updatedSubscriptions);
  }

  // const handleAddSubscription = (e) => {
  //   e.preventDefault();
  //   const subscription = { subscriptionName, amount, renewalDate };
  //   fetch("api/subscriptions", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${auth}`,
  //     },
  //     body: JSON.stringify(subscription),
  //   })
  //     .then((response) => {
  //       if (response.status === 200) return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return ( 
    <div>
      {/* <Button onClick={handleAddSubscription}>Add a Subscription</Button> */}
      <Grid container spacing={3}>
        {subscriptions.map(subscription => (
          <Grid item  key={subscription.subscriptionId}>
            <CustomCardSubscription cardContent={subscription} handleDelete={handleDeleteSubscription} />
          </Grid>
        ))}
        <Grid item>
          <Button className={styles.addButton} variant="outlined" onClick={handleOpenAddSubscription}><AddIcon />Add Subscription</Button>
        </Grid>
      </Grid>
      <AddSubscription openPopup={openAddSubscriptionModal} setOpenPopup={setOpenAddSubscriptionModal}/>
    </div>
  );
}
