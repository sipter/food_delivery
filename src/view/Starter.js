import React from "react";
import { StarterCard } from "../components/StarterCard";

export const Starter = ({ addItemToCart }) => {
  const items = [
    {
      name: "Feta cheese with olives",
      ingredients:"Feta cheese with olives. Served with olive oil and oregano.",
      price: 7,
      image: "/assets/FetaOlives.jpg",
    },
    {
      name: "Feta cheese with olives",
      ingredients:"Feta cheese with olives. Served with olive oil and oregano.",
      price: 7,
    },
    {
      name: "Feta cheese with olives",
      ingredients:"Feta cheese with olives.Served with olive oil and oregano.",
      price: 7,
    },
    {
      name: "Feta cheese with olives",
      ingredients:"Feta cheese with olives. Served with olive oil and oregano.",
      price: 7,
    },
    
  ]

  return (<>
    {items.map(item => <StarterCard addItemToCart={addItemToCart} starter={item} />)}
  </>);
};
