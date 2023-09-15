import { useState } from "react";
import "./EditName.css";

const EditName = ({ setName, name, index }) => {
  const [clicked, setClicked] = useState(false);
  const [nameChange, setNameChange] = useState(name);
  let nameHistory = name;

  const handleDoubleClick = () => {
    setClicked(true);
    nameHistory = name;
    setNameChange(name);
  };
  const handleChange = (event) => {
    setNameChange(event.target.value);
  };
  const handleBlur = (event) => {
    setClicked(false);
    if (event.target.value !== "") {
      setName(nameChange, index);
    } else {
      setName(nameHistory, index);
      setNameChange(name);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setClicked(false);
      if (event.target.value !== "") {
        setName(nameChange, index);
      } else {
        setName(nameHistory, index);
        setNameChange(name);
      }
    }
  };
  return (
    <div onDoubleClick={handleDoubleClick}>
      {clicked ? (
        <>
          <input
            id="namechange"
            type="text"
            step="1"
            value={nameChange}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          :
        </>
      ) : (
        <>
          <span id="namesize">{name}</span>:
        </>
      )}
    </div>
  );
};

export default EditName;
