import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./MainLife.css";
import EditLife from "../EditLife/EditLife";
const MainLife = () => {
  const [life, setLife] = useState(40);
  const decreaseLife = () => {
    setLife(life - 1);
  };
  const increaseLife = () => {
    setLife(life + 1);
  };

  return (
    <div id="mainlifebody">
      <button class="lifebuttons" id="decrease" onClick={decreaseLife}>
        <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
      </button>
      <EditLife className="mainlifechange" setLife={setLife} life={life} />
      <FontAwesomeIcon icon={faHeart} beat color="red" />
      <button class="lifebuttons" id="increase" onClick={increaseLife}>
        <FontAwesomeIcon icon={faChevronRight} size="2xl" />
      </button>
    </div>
  );
};

export default MainLife;
