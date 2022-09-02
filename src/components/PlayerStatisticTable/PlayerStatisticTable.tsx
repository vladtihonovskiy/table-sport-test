import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import IPlayerStatisticTableProps from "./PlayerStatisticTable.types";

export const PlayerStatisticTable: React.FC<IPlayerStatisticTableProps> = ({
  statisticArray,
}) => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Place</TableCell>
          <TableCell align="center">Team</TableCell>
          <TableCell align="center">Played</TableCell>
          <TableCell align="center">Win</TableCell>
          <TableCell align="center">Draw</TableCell>
          <TableCell align="center">Lost</TableCell>
          <TableCell align="center">Points</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {statisticArray.map((row, index) => (
          <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="center">{index + 1}</TableCell>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="center">{row.played}</TableCell>
            <TableCell align="center">{row.win}</TableCell>
            <TableCell align="center">{row.draw}</TableCell>
            <TableCell align="center">{row.lost}</TableCell>
            <TableCell align="center">{row.totalPoints}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default PlayerStatisticTable;
