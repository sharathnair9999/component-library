import React from 'react';

import { FaInbox } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const Drawer2 = () => {
  return <div className='output'>
      <div className=" drawer-container">
        <h2 className="drawer-title">Title</h2>
        <small className="drawer-subtext">Subtext</small>
        <div className="options">
          <div className="option active">
            <FaInbox size="1.2rem" className="option-icon" />

            <span className="option-name">Inbox</span>
          </div>
          <div className="option">
            {" "}
            <span className="option-icon">
              <AiFillStar size="1.2rem" />
            </span>
            <span className="option-name">Star</span>
          </div>
          <div className="option">
            {" "}
            <span className="option-icon">
              <FaInbox size="1.2rem" />
            </span>
            <span className="option-name">Sent Mail</span>
          </div>
          <div className="option">
            {" "}
            <span className="option-icon">
              <FaInbox size="1.2rem" />
            </span>
            <span className="option-name">Drafts</span>
          </div>
        </div>
      </div>
  </div>;
};

export default Drawer2;
