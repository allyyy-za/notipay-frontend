import React from "react";
import { Card, CardActions, CardContent, CardHeader, IconButton, styled, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./styles/CustomCard.module.css";

export default function CustomCardBill(props) {
  const { className, cardContent, handleDelete, handleEdit } = props;

  const CssCard = styled(Card) ({
    background: "linear-gradient(180deg, #13C690 24.48%, #3DC79D 100%);",
    width: "274px",
    height: "164px",
    borderRadius: "8px",
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
          title={cardContent.billName}
        />
        <CardContent  className={styles.amountField}>
          <strong>Amount:</strong> {cardContent.amount} <br />
          <strong>Due Date:</strong> {cardContent.dueDate}
        </CardContent>
        <CardActions className={styles.icons}>
          <IconButton onClick={() => handleEdit(cardContent.billId)}><EditIcon className={styles.editIcon}/></IconButton>
          <IconButton onClick={() => handleDelete(cardContent.billId)}><DeleteIcon className={styles.deleteIcon}/></IconButton>
        </CardActions>
      </CssCard>
    </div>
  );
}
