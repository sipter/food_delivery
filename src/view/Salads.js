import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
export const Salads = () => {
  return (
    <div className="salads">
      <div className="salad1">
        <h2>Lorem</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>11.20$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="salad2">
        <h2>Lorem</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>8.90$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="salad3">
        <h2>Lorem</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>14.30$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="salad4">
        <h2>Lorem</h2>
        <p>Ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>6.60$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="salad5">
        <h2>Lorem</h2>
        <p>ingredients:</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>10.20$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
    </div>
  );
};
