import React from "react";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import history from "./history";
import Home from "./Home/Home";

// import your route components too

const Router = () => (
  <HistoryRouter history={history}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </HistoryRouter>
);

export default Router;
