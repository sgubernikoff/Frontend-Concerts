import { Route, NavLink, Switch } from "react-router-dom";
import "../App.css";
import Homepage from "./Homepage";
import Concert from "./Concert";
import Review from "./Review";
import React, { useState } from "react";

const linkStyles = {
  height: "100%",
};

// #7894FF
// #FF4F2D
// #992800;
// #7894FF

function NavBar() {
  return (
    <div className="divvy">
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
        Home
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

function SideNav({ concerts, onCreateProject }) {
  return (
    <div>
      <NavBar />
      <Route path="/">
        <Homepage />
      </Route>
      <Route path="/concerts">
        <Concert concerts={concerts} />
      </Route>
      <Route path="/reviews">
        <Review onCreateProject={onCreateProject} />
      </Route>
    </div>
  );
}

export default SideNav;
