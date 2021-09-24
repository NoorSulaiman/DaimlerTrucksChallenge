import React from "react";
import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export default function DetailsTable({ component }) {
  const componentProps = Object.keys(component).map((prop, indx) => {
    return (
      <TableRow key={component}>
        <TableCell component="th" scope="row">
          {prop}
        </TableCell>
        <TableCell align="right">{JSON.stringify(component[prop])}</TableCell>
      </TableRow>
    );
  });
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="details table">
          <TableBody>{componentProps}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
