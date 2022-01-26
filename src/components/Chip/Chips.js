import React, {useState} from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const Chips = () => {
  document.title = "Chips"
  const [chips, setChips] = useState(["React", "Is"]);

  const addChip = (e) => {
    if (e.target.value.trim().length === 0) {
      return alert("Please input some text");
    }
    setChips([...chips, e.target.value])
    e.target.value = ""
  };
 
  return (
    <div className="output">
      <div className="chips-container">
        {chips.map((chip, index) => {
          return (
            <span key={index} className="chip">
              <span className="chip-text">{chip}</span>
              <RiCloseCircleLine
                className="close-icon"
                onClick={() => {
                  chips.splice(index,1)
                setChips([...chips])
                }}
              />
            </span>
          );
        })}
        <input
        autoFocus
          className="type-chip"
          type="text"
          placeholder="Type.."
          onKeyPress={(e) => e.key === "Enter" && addChip(e)}
        />
      </div>
    </div>
  );
};

export default Chips;
