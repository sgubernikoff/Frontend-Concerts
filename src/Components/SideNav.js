import { Route, NavLink, Switch } from "react-router-dom";
import "../App.css";
import Homepage from "./Homepage";
import Concert from "./Concert";
import Review from "./Review";

const linkStyles = {
  height: "100%",
};

// #7894FF
// #FF4F2D
// #992800;
// #7894FF

function NavBar() {
  return (
    <div class="divvy">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#992800",
          color: "#ffaf00",
          fontSize: "40px",
        }}
      >
        Homepage
      </NavLink>
      <NavLink
        to="/concerts"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#992800",
          color: "#ffaf00",
          fontSize: "40px",
        }}
      >
        Concerts
      </NavLink>
      <NavLink
        to="/reviews"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#992800",
          color: "#ffaf00",
          fontSize: "40px",
        }}
      >
        Leave Review
      </NavLink>
    </div>
  );
}

function SideNav() {
  return (
    <div>
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
