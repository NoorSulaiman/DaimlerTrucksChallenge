import React from "react";
import {
  Table,
  TableContainer,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export default function DetailsTable({ component }) {
  const componentProps = Object.keys(component).map((prop) => {
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {prop}
        </TableCell>
        <TableCell align="right">{component[prop]}</TableCell>
      </TableRow>
    );
  });
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">{componentProps}</Table>
      </TableContainer>
    </div>
  );
}
