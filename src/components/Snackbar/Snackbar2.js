import React, {useState} from "react";
import { IoMdClose } from "react-icons/io";

const Snackbar2 = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className={`window-for-snackbars  ${isActive ? "hide" : null}`}>
      <div className="snackbar2">
        <span>Can't send photo. Retry in 5 seconds.</span>
        <button>RETRY</button>
        <IoMdClose onClick={toggleClass} className="close-icon" size={"2rem"} />
      </div>
    </div>
  );
};

export default Snackbar2;
