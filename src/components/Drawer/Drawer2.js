import React from "react";

import { FaInbox, FaBookmark } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { RiSettings5Fill } from "react-icons/ri";
import { MdLiveHelp } from "react-icons/md";

const Drawer2 = () => {
  return (
    <div className="output">
      <div className=" permanent-drawer-container">
        <aside className="side-drawer">
          <div className="sticky-text">
            <h2 className="drawer-title">Title</h2>
            <small className="drawer-subtext">Subtext</small>
          </div>
          <nav className="options">
            <ul>
              <li className="option active">
                {" "}
                <FaInbox size="1.2rem" className="option-icon" />
                <span className="option-name">Inbox</span>
              </li>
              <li className="option">
                {" "}
                <span className="option-icon">
                  <AiFillStar size="1.2rem" />
                </span>
                <span className="option-name">Star</span>
              </li>
              <li className="option">
                <span className="option-icon">
                  <FaInbox size="1.2rem" />
                </span>
                <span className="option-name">Sent Mail</span>
              </li>
              <li className="option">
                {" "}
                <span className="option-icon">
                  <FaInbox size="1.2rem" />
                </span>
                <span className="option-name">Drafts</span>
              </li>
              <hr className="permanent-drawer-hr" />
              <h4>Labels</h4>
              <li className="option">
                {" "}
                <span className="option-icon">
                  <FaBookmark size="1.2rem" />
                </span>
                <span className="option-name">Family</span>
              </li>
              <li className="option">
                {" "}
                <span className="option-icon">
                  <FaBookmark size="1.2rem" />
                </span>
                <span className="option-name">Friends</span>
              </li>
              <li className="option">
                {" "}
                <span className="option-icon">
                  <FaBookmark size="1.2rem" />
                </span>
                <span className="option-name">Work</span>
              </li>
              <hr className="permanent-drawer-hr" />
              <li className="option">
                {" "}
                <span className="option-icon">
                  <RiSettings5Fill size="1.4rem" />
                </span>
                <span className="option-name">Settings</span>
              </li>
              <li className="option">
                {" "}
                <span className="option-icon">
                  <MdLiveHelp size="1.2rem" />
                </span>
                <span className="option-name">Help &amp; Feedback</span>
              </li>
            </ul>
          </nav>
          
        </aside>
        <main className="main-section">
          <h2 className="main-section-header">Permanent Drawer</h2>
          <p className="main-section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sunt rerum ea tenetur? Libero corporis earum dolor hic eos facere et
            eaque autem iusto labore unde, quaerat nesciunt facilis excepturi?
          </p>
          <p className="main-section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sunt rerum ea tenetur? Libero corporis earum dolor hic eos facere et
            eaque autem iusto labore unde, quaerat nesciunt facilis excepturi?
          </p>
          <p className="main-section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sunt rerum ea tenetur? Libero corporis earum dolor hic eos facere et
            eaque autem iusto labore unde, quaerat nesciunt facilis excepturi?
          </p>
          <p className="main-section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sunt rerum ea tenetur? Libero corporis earum dolor hic eos facere et
            eaque autem iusto labore unde, quaerat nesciunt facilis excepturi?
          </p>
          <p className="main-section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sunt rerum ea tenetur? Libero corporis earum dolor hic eos facere et
            eaque autem iusto labore unde, quaerat nesciunt facilis excepturi?
          </p>
          <p className="main-section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sunt rerum ea tenetur? Libero corporis earum dolor hic eos facere et
            eaque autem iusto labore unde, quaerat nesciunt facilis excepturi?
          </p>
          <p className="main-section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sunt rerum ea tenetur? Libero corporis earum dolor hic eos facere et
            eaque autem iusto labore unde, quaerat nesciunt facilis excepturi?
          </p>
          <p className="main-section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sunt rerum ea tenetur? Libero corporis earum dolor hic eos facere et
            eaque autem iusto labore unde, quaerat nesciunt facilis excepturi?
          </p>
          <p className="main-section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sunt rerum ea tenetur? Libero corporis earum dolor hic eos facere et
            eaque autem iusto labore unde, quaerat nesciunt facilis excepturi?
          </p>
        </main>
      </div>
    </div>
  );
};

export default Drawer2;
