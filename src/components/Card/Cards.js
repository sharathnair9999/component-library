import React from "react";
import { Link, Outlet } from "react-router-dom";

import "../../App.css";

const Cards = () => {
  document.title = "Cards"
  return (
    <div >
      <nav className="all-container">
        <Link className="child" to={`/cards/card1`} >Basic</Link>
        <Link className="child" to={`/cards/card2`} >Basic w/ Text over Media</Link>
        <Link className="child" to={`/cards/card3`} >Basic w/ Header</Link>
        <Link className="child" to={`/cards/card4`} >Basic w/ only Buttons</Link>
        <Link className="child" to={`/cards/card5`} >Basic w/ only Icons</Link>
        <Link className="child" to={`/cards/card6`} >Horizontal Image &amp; Text</Link>
      </nav>
      
      <div className="output">
        <Outlet />
      </div>
     
    </div>
  );
};

export default Cards;
