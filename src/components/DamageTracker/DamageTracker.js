import { useState } from "react";
import "./DamageTracker.css";
import logo from "../../img/phyrexian.png";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditLife from "../EditLife/EditLife";
import EditName from "../EditName/EditName";
const DamageTracker = ({ name, setName, index }) => {
  const [life, setLife] = useState(0);
  const increaseLife = () => {
    setLife(life + 1);
  };
  const decreaseLife = () => {
    setLife(life - 1);
  };
  return (
    <div class="damagelife">
      <button class="damagebutton" id="decrease" onClick={decreaseLife}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {name === "Infect" ? (
        <>
          <img src={logo} id="logo" alt="phyrexian logo" />
          {name}:
        </>
      ) : (
        <>
          <EditName name={name} setName={setName} index={index} />
        </>
      )}
      <EditLife life={life} setLife={setLife} className={"lifechange"} />
      <button class="damagebutton" id="increase" onClick={increaseLife}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default DamageTracker;
