import React from "react";
import { DessertCard } from "../components/DessertCard";
import { v4 as uuid } from "uuid";
export const Dessert = ({ addItemToCart }) => {
  const desserts = [
    {
      name: "Loukoumades",
      ingredients:
        "deep fried sweet dough to golden and crispy perfection.Served with honey syrup, cinnamon and with chopped walnuts or toasted sesame seeds.",
      price: 7,
      image: "/assets/Loukoumades.jpg",
    },
    {
      name: "Revani",
      ingredients:
        "Syrup-soaked cake made with semolina, yoghurt and lemon zest. Served with or without ice cream.",
      price: 8,
      image: "/assets/Revani.jpg",
    },
    {
      name: "Sokolatopita",
      ingredients:
        "Syrup drenched chocolate cake, it's topped with a chocolate ganache and served with or without ice cream.",
      price: 9,
      image: "/assets/Sokolatopita.jpg",
    },
  ];

  return (
    <>
      {desserts.map((item,index) => (
        <DessertCard key={index} addItemToCart={addItemToCart} dessert={item} />
      ))}
    </>
  );
};
