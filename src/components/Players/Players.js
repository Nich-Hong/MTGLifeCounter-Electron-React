import { useState } from "react";
import DamageTracker from "../DamageTracker/DamageTracker";
import { faUserPlus, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Players.css";
const Players = () => {
  const [players, setPlayers] = useState([]);
  const addPlayer = () => {
    let size = players.length;
    let newPlayer = "Player " + size.toString();
    setPlayers([...players, newPlayer]);
  };
  const subPlayer = () => {
    const temp = [...players];
    temp.pop();
    setPlayers(temp);
  };
  const setName = (newName, index) => {
    let newArr = [...players];
    newArr[index] = newName;
    setPlayers(newArr);
  };
  return (
    <div id="playerbody">
      <div class="userButton">
        <button id="subuser" onClick={subPlayer}>
          <FontAwesomeIcon icon={faUserMinus} />
        </button>
        <button id="adduser" onClick={addPlayer}>
          <FontAwesomeIcon icon={faUserPlus} />
        </button>
      </div>
      <DamageTracker name={"Infect"} />
      <div>
        {players.map((p, index) => (
          <DamageTracker name={p} setName={setName} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Players;
