// import logo from "./logo.svg";
import "../src/style/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { MainDish } from "./view/MainDish";
import { Dessert } from "./view/Dessert";
import { Starter } from "./view/Starter";
import { Salads } from "./view/Salads";
import { Drinks } from "./view/Drinks";
import { Container, CssBaseline } from "@mui/material";
import NavBar from "../src/components/NavBar";
import ShoppingCart from "./components/ShoppingCart";
import { v4 as uuid } from "uuid";

function App() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [products, setProducts] = React.useState([]);
console.log(products)
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const addItemToCart = (item) => setProducts([...products, item]);

  return (
    <>
      <CssBaseline />

      <Router>
        <NavBar toggleCart={toggleCart} />
        {/* <div> */}
        {/* <header>
          <Header/> 
        </header> */}

        {/* <Route path="/" exact component={Header} /> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <ShoppingCart
          isCartOpen={isCartOpen}
          toggleCart={toggleCart}
          products={products}
        />
        <Container maxWidth="lg">
          <Routes>
            <Route
              path="/starter"
              exact
              element={<Starter addItemToCart={addItemToCart} />}
            />
            <Route path="/salads" exact element={<Salads addItemToCart={addItemToCart}/>} />
            <Route path="/main-dish" exact element={<MainDish addItemToCart={addItemToCart}/>} />
            <Route path="/dessert" exact element={<Dessert addItemToCart={addItemToCart}/>} />
            <Route path="/drinks" exact element={<Drinks addItemToCart={addItemToCart}/>} />
          </Routes>
        </Container>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
