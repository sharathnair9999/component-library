import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Snackbar3 = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className={`window-for-snackbars  ${isActive ? "hide" : null}`}>
      <div className="snackbar3">
        <p>
          This item already has the label "travel". You can add a new label.
        </p>
        <div className="snackbar3-icons">
          <button>RETRY</button>
          <IoMdClose
            onClick={() => {
              toggleClass();
            }}
            className="close-icon"
            size={"2rem"}
          />
        </div>
      </div>
    </div>
  );
};

export default Snackbar3;
