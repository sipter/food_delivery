import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
export const Drinks = () => {
  return (
    <div className="main-dish">
      <div className="dish1">
        <h2>Soda</h2>
        <p>300ml</p>
        <button>2.50$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="dish2">
        <h2>Soda</h2>
        <p>1l</p>
        <button>3.30$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="dish3">
        <h2>Beer</h2>
        <p>330ml</p>
        <button>3.40$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="dish4">
        <h2>Wine</h2>
        <p>750ml</p>
        <button>12.70$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
      <div className="dish5">
        <h2>Water</h2>
        <p>1l</p>
        <button>5.50$ <FontAwesomeIcon icon={faCartPlus}/></button>
      </div>
    </div>
  );
};
