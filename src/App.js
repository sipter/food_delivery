// import logo from "./logo.svg";
import "../src/style/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Salads } from "./view/Salads.js";
import { MainDish } from "./view/MainDish";
import { Dessert } from "./view/Dessert";
import { Menu } from "./view/Menu";
import { Drinks } from "./view/Drinks";
function App() {
  return (
    <Router>
      <div>
        <header>
          <Header/> 
        </header>
       
        {/* <Route path="/" exact component={Header} /> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/menu" exact  element={<Menu />} />
          <Route path="/salads" exact  element={<Salads />} />
          <Route path="/main-dish" exact  element={<MainDish />} />
          <Route path="/dessert" exact element={<Dessert />}/>
          <Route path="/drinks" exact element={<Drinks />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
