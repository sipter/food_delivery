import React from "react";
import { DishCard } from "../components/DishCard";

export const MainDish = ({ addItemToCart }) => {
  const mainDish = [
    {
      name: "Souvlakia",
      ingredients:
        "Pork meat skewer served with potato fries, tzatziki, onions and pita bread.",
      price: 17,
      image: "/assets/Souvlakia.jpg",
    },
    {
      name: "Pastitsio",
      ingredients:
        "Pasta with bolognese sauce ,cheese and bechamel on top baked in the oven.",
      price: 15,
      image: "/assets/Pastitsio.jpg",
    },
    {
      name: "Tsipoura(Sea bream)",
      ingredients:
        "Tsipoura (Sea bream) baked in the oven, served with roasted veggies: potatoes, tomatoes, onions, bell peppers",
      price: 19,
      image: "/assets/Tsipoura.jpg",
    },
    {
      name: "Spanakorizo(vegan)",
      ingredients:
        "Spinach and rice with herbs: dill, parsley, oregano served with fresh lemon juice.",
      price: 12,
      image: "/assets/Spanakorizo.jpg",
    },
  ];

  return (
    <>
      {mainDish.map((item) => (
        <DishCard addItemToCart={addItemToCart} mainDish={item} />
      ))}
    </>
  );
};
