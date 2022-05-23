import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCard from "../../../../components/controls/CustomCard";
import AddIcon from '@mui/icons-material/Add';
import { useLocalState } from "../../../../util/useLocalStorage";
import styles from "./Subscriptions.module.css"

export default function Subscriptions() {
  const [auth, setAuth] = useLocalState("", "authToken");
  const [subscriptions, setSubscriptions] = useState([]);

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
            <CustomCard cardContent={subscription} handleDelete={handleDeleteSubscription} />
          </Grid>
        ))}
        <Grid item>
          <Button className={styles.addButton} variant="outlined"><AddIcon />Add Subscription</Button>
        </Grid>
      </Grid>
    </div>
  );
}
