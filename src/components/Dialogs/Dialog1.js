import React, { useState } from "react";

const Dialog1 = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="dialog-content">
      <div className={`dialog-container ${showDialog?null:'hide-dialog'}`}>
      <div className={`dialog-box `}>
        <h2>Dialog Header</h2>
        <hr  />
        <p>Here comes the dialog text</p>
        <div className="dialog-buttons">
        <button className="primary-dialog-btn">OK</button>
        <button  className="secondary-dialog-btn" onClick={()=>{setShowDialog(false)}}>Cancel</button>
        </div>
        </div>
      </div>
     
        <button className="primary-dialog-btn"
          onClick={() => {
            setShowDialog(true);
          }}
        >
          Open Simple Dialog
        </button>
    </div>
  );
};

export default Dialog1;
