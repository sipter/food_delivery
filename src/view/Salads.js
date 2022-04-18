import React from "react";
import { SaladsCard } from "../components/SaladsCard";

export const Salads = ({ addItemToCart }) => {
  const salads = [
    {
      name: "Greek traditional salad",
      ingredients:"Tomatoes, cucumber, onions, green bell pepper, olives, feta cheese.",
      price: 12,
      image: "/assets/GreekSalad.jpg",
    },
    {
      name: "Patzaria(Beetroot)",
      ingredients:"Beetroots, with garlic and walnuts",
      price: 10,
      image: "/assets/BeetRoot.jpeg",
    },
    {
      name: " Politiki",
      ingredients:"White cabbage with carrots, red bell pepper, celery, parsley and lemon juice.",
      price: 11,
      image:"/assets/PolitikiSalad.jpg",
    },
    {
      name: "Lettuce and arugula",
      ingredients:"Lettuce, arugula, tomatoes, parmesan cheese. Served with olive oil and balsamic vinegar.",
      price: 15,
      image:"/assets/Lettuce.jpg",
    },
    
  ]

  return (<>
    {salads.map(item => <SaladsCard addItemToCart={addItemToCart} salad={item} />)}
  </>);
};
