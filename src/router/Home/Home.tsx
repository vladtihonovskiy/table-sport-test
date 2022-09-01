import React from "react";
import { Container, Grid } from "@mui/material";
import GameHistoryContainer from "../../components/GamesHistoryContainer/GameHistoryContainer";

const Home = () => (
  <Container sx={{ minHeight: "100vh" }} maxWidth="xl">
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      flexWrap="wrap"
      sx={{ height: "100%", paddingTop: 5 }}
    >
     <GameHistoryContainer />
    </Grid>
  </Container>
);

export default Home;
