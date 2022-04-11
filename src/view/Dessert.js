import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
export const Dessert = () => {
  return (
    <div className="dessert">
      <div className="dessert1">
        <h2>Lorem</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>9.60$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="dessert2">
        <h2>Lorem</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>7.80$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="dessert3">
        <h2>Lorem</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>5.40$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
    </div>
  );
};
