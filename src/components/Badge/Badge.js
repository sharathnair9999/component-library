import React, {useState} from "react";
import { ImHome } from "react-icons/im";

const Badge = () => {
  document.title = "Badge"
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="output">
      <ul className="badge-container">
        <li className="badge1">
          <p>
            Text with badge <span className="sm-badge">4</span>
          </p>
        </li>

        <li className="badge2">
          <p>
            Text with large badge <span className="lg-badge">4</span>
          </p>
        </li>
        <li className="badge3">
          <p className="badge3-text">Button with a badge on the left</p>&nbsp;
          <span className="sm-left-badge">4</span>
          <button className="button1">Button</button>
        </li>
        <li className="badge4">
          <p className="badge4-text">Button with a badge hides on click</p>&nbsp;
          <span className={`sm-left-badge ${isActive ? 'hide': null}`}>5</span>
          <button className={`button2 `} onClick={toggleClass }>Hide</button>
        </li>
        <li className="badge5">
          <span className="badge5-text">Icon with a badge&nbsp;</span>
          <ImHome size={"1.8rem"} className="badge5-icon" />{" "}
          <span className="sm-right-badge">10</span>
        </li>
      </ul>
    </div>
  );
};

export default Badge;
