import React from "react";
import { NavLink } from "react-router-dom";

export default class Registration extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                <h3>О Себе</h3>
              </NavLink>
            </li>
            <li>
              <NavLink to="/game">
                <h3>Game</h3>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <h3>Login</h3>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
