import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
export const MainDish = () => {
  return (
    <div className="main-dish">
      <div className="dish1">
        <h2>Lorem</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>12.50$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="dish2">
        <h2>Lorem</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>17.30$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="dish3">
        <h2>Lorem</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>10.30$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="dish4">
        <h2>Lorem</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>22.70$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="dish5">
        <h2>Lorem</h2>
        <p>ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>15.50$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
    </div>
  );
};
