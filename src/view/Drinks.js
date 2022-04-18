import React from "react";
import { DrinksCard } from "../components/DrinksCard";
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
        <DrinksCard addItemToCart={addItemToCart} drink={item} key={index}/>
      ))}
    </>
  );
};
