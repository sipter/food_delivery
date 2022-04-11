import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu1">
        <h2>Salad and main dish</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>20.60$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="menu2">
        <h2>Salad and 2 main dish</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>35.80$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="menu3">
        <h2>Salad, main dish and drink</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>25.40$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
    </div>
  );
};
