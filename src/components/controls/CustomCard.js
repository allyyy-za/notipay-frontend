import React from "react";
import { Card, CardActions, CardContent, CardHeader, IconButton, styled, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./styles/CustomCard.module.css";

export default function CustomCard(props) {
  const { className, subscription, handleDelete } = props;

  const CssCard = styled(Card) ({
    background: "linear-gradient(180deg, #197AFF 24.48%, #3F90FF 100%)",
    width: "274px",
    height: "164px",
    "& .MuiCardHeader-title": {
      color: "white",
      fontFamily: "Open Sans",
      fontWeight: 700,
    }
  });
  return (
    <div>
      <CssCard elevation={1}>
        <CardHeader className={styles.title}
          title={subscription.subscriptionName}
        />
        <CardContent  className={styles.amountField}>
          <strong>Amount:</strong> {subscription.amount} <br />
          <strong>Renewal Date:</strong> {subscription.renewalDate}
        </CardContent>
        <CardActions className={styles.icons}>
          <IconButton><EditIcon className={styles.editIcon}/></IconButton>
          <IconButton onClick={() => handleDelete(subscription.subscriptionId)}><DeleteIcon className={styles.deleteIcon}/></IconButton>
        </CardActions>
      </CssCard>
    </div>
  );
}
