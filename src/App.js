import Header from "./Components/Homepage";
import { Route, NavLink, Switch } from "react-router-dom";
import "./App.css";
import SideNav from "./Components/SideNav";

const linkStyles = {
  display: "inline-block",
  width: "130px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#FF4F2D",
  textDecoration: "none",
  color: "#FF89FF",
  fontWeight: "bold",
  textAlign: "center",
};

// #FF4F2D
// #FF8B74;
// #FF89FF

function App() {
  return (
    <div class="App">
      <SideNav />
    </div>
  );
}

export default App;
