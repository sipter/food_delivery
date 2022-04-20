import React from "react";
import { DrinksCard } from "../components/DrinksCard";
import { v4 as uuid } from "uuid";
export const Drinks = ({ addItemToCart }) => {
  const drinks = [
    {
      name: "Water 1l",
      price: 5,
    },
    {
      name: "Wine 750ml",
      price: 15,
    },
    {
      name: "Ouzo 500ml",
      price: 7,
    },
    {
      name: "Coffee",
      price: 3,
    },
  ];

  return (
    <>
      {drinks.map((item,index) => (
        <DrinksCard key={index} addItemToCart={addItemToCart} drink={item}/>
      ))}
    </>
  );
};
