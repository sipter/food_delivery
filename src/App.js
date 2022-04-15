// import logo from "./logo.svg";
import "../src/style/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Salads } from "./view/Salads.js";
import { MainDish } from "./view/MainDish";
import { Dessert } from "./view/Dessert";
import { Starter } from "./view/Starter";
import { Drinks } from "./view/Drinks";
import { Container, CssBaseline } from "@mui/material";
import NavBar from "../src/components/NavBar";
function App() {
  return (
    <>
      <CssBaseline />

      <Router>
        <NavBar />
        {/* <div> */}
        {/* <header>
          <Header/> 
        </header> */}

        {/* <Route path="/" exact component={Header} /> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Container maxWidth="lg">
          <Routes>
            <Route path="/starter" exact element={<Starter />} />
            <Route path="/salads" exact element={<Salads />} />
            <Route path="/main-dish" exact element={<MainDish />} />
            <Route path="/dessert" exact element={<Dessert />} />
            <Route path="/drinks" exact element={<Drinks />} />
          </Routes>
        </Container>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
