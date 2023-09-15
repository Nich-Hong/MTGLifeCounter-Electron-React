import "./App.css";
import MainLife from "./components/Mainlife/MainLife";
import Players from "./components/Players/Players";
function App() {
  return (
    <div>
      <div id="appbody">
        <MainLife />
      </div>
      <div>
        <Players />
      </div>
    </div>
  );
}

export default App;
