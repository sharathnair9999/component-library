import React from "react";
import "../../App.css";
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
const Card5 = () => {
  return (
    <div className="card-fifth">
      <div className="card-fifth-body">
        <img
          src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          alt="leaf"
          className="card-image"
        />
        <div className="card-fifth-text">
          <h3 className="title">Building Code Muscles</h3>
          <small className="courtesy">by Sharath Nair</small>
          <p className="description">
            Sipping Coffee, LoFi beats and Coding === Deadly combo
          </p>
        </div>
      </div>
      <div className="card-fifth-btn-section">
       
        <div className="actions">
          <span className="action-btns">
            <FaRegHeart />
          </span>
          <span className="action-btns">
            <FiShare2 />
          </span>
          <span className="action-btns">
            <FiMoreVertical />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card5;
