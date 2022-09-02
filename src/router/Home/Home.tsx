import React from "react";
import { Box, Container, Grid } from "@mui/material";
import GameHistoryContainer from "../../components/GamesHistoryContainer/GameHistoryContainer";
import AddNewPlayerNameInput from "../../components/AddNewPlayerNameInput/AddNewPlayerNameInput";
import TableContainer from "../../components/TableContainer/TableContainer";

const Home = () => (
  <Container sx={{ minHeight: "100vh" }} maxWidth="xl">
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      flexWrap="wrap"
      sx={{ height: "100%", pt: 20 }}
    >
      <Box width="60%" mx={5}>
        <AddNewPlayerNameInput />
        <TableContainer />
      </Box>
      <GameHistoryContainer />
    </Grid>
  </Container>
);

export default Home;
