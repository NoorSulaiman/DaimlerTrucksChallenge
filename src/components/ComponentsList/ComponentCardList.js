import React, { useState, useEffect } from "react";
import styles from "./ComponentCard.module.css";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";

export default function ComponentCardList({ components, cardButtonFunction }) {
  const [open, setOpen] = useState(false);
  const [locationName, setLocationName] = useState("");
  const [componentsArray, setComponentsArray] = useState(components);
  const onDeleteClick = (name) => {
    setLocationName(name);
    setOpen(true);
  };
  const onDialogYesClick = () => {
    cardButtonFunction(locationName);
    let newComponentsArray = componentsArray;
    componentsArray.map((component, indx) => {
      if (locationName === component.location) {
        newComponentsArray.splice(indx, 1);
        setComponentsArray(newComponentsArray);
      }
    });
    setOpen(false);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setComponentsArray(components);
  }, [components]);
  const componentCards = componentsArray.map((component) => {
    return (
      <Grid key={component.location} item xs={1}>
        <Card>
          <CardContent>
            <Typography className={styles.itemName}>
              {component.location}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => onDeleteClick(component.location)}
              className={styles.cardDeleteButton}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6}>
          {componentCards}
        </Grid>
      </Box>
      <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {`Are you sure you want to delete ${locationName} ?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDialogClose}>No</Button>
          <Button onClick={onDialogYesClick} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
