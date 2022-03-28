import Header from "./Homepage";
import { Route, NavLink, Switch } from "react-router-dom";
import "../App.css";
import Homepage from "./Homepage";
import Concert from "./Concert";
import Review from "./Review";

const linkStyles = {
  display: "block",
  width: "200px",
  height: "290px",
  background: "#7894FF",
  color: "#FF89FF",
  fontWeight: "bold",
  padding: "10px",
  textAlign: "10px",
  margin: "auto",
};

// #FF4F2D
// #FF8B74;
// #FF89FF

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#FF89FF",
          color: "#7894FF",
        }}
      >
        Homepage
      </NavLink>
      <NavLink
        to="/concerts"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#FF89FF",
          color: "#7894FF",
        }}
      >
        View Concerts
      </NavLink>
      <NavLink
        to="/reviews"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#FF89FF",
          color: "#7894FF",
        }}
      >
        Leave Review
      </NavLink>
    </div>
  );
}

function SideNav() {
  return (
    <div class="App">
      <NavBar />
      <Route path="/">
        <Homepage />
      </Route>
      <Route path="/concerts">
        <Concert />
      </Route>
      <Route path="/reviews">
        <Review />
      </Route>
    </div>
  );
}

export default SideNav;
