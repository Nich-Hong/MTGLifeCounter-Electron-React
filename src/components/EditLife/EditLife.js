import { useState } from "react";
import "./EditLife.css";
const EditLife = ({ setLife, life, className }) => {
  const [clicked, setClicked] = useState(false);
  const [lifeChange, setLifeChange] = useState(life);
  let lifeHistory = life;

  const handleDoubleClick = () => {
    setClicked(true);
    lifeHistory = life;
    setLifeChange(life);
  };
  const handleChange = (event) => {
    setLifeChange(parseInt(event.target.value));
  };
  const handleBlur = (event) => {
    setClicked(false);
    if (event.target.value !== "") {
      setLife(lifeChange);
    } else {
      setLife(lifeHistory);
      setLifeChange(life);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setClicked(false);
      if (event.target.value !== "") {
        setLife(lifeChange);
      } else {
        setLife(lifeHistory);
        setLifeChange(life);
      }
    }
  };
  return (
    <div onDoubleClick={handleDoubleClick}>
      {clicked ? (
        <input
          id="lifechange"
          className={className}
          type="number"
          step="1"
          value={lifeChange}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span id="lifesize">{life}</span>
      )}
    </div>
  );
};

export default EditLife;
