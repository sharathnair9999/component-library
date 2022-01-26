import React, { useState } from "react";

const Dialog2 = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="dialog-content">
      <div className={`dialog-container ${showDialog?null:'hide-dialog'}`}>
      <div className={`dialog-box dialog-box2`}>
       <section >
       <h2>Dialog Header</h2>
        <hr  />
        <ul className="list">
          <li className="list-item"><label htmlFor=""><input type="radio" name="list-item" id=""  />Item 1</label></li>
          <li className="list-item"><label htmlFor=""><input type="radio" name="list-item" id="" />Item 2</label></li>
          <li className="list-item"><label htmlFor=""><input type="radio" name="list-item" id="" />Item 3</label></li>
          <li className="list-item"><label htmlFor=""><input type="radio" name="list-item" id="" />Item 4</label></li>
          <li className="list-item"><label htmlFor=""><input type="radio" name="list-item" id="" />Item 5</label></li>
          <li className="list-item"><label htmlFor=""><input type="radio" name="list-item" id="" />Item 6</label></li>
        </ul>
        <hr />
       </section>
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
          Open Scrollable Dialog
        </button>
    </div>
  );
};

export default Dialog2;
