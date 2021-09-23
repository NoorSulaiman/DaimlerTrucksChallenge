import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DetailsTable from "../DetailsTable/DetailsTable";

export default function ComponentsDetailsList({ components }) {
  const componentCards = components.map((component) => {
    return (
      <Grid item xs={5}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>{component.location}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DetailsTable component={component} />
          </AccordionDetails>
        </Accordion>
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
    </div>
  );
}
