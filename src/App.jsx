import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./styles/index.scss";
import AboutMe from "./components/AboutMe";
import GameXO from "./components/GameXO";
import FormLogin from "./components/FormLogin";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
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
          <Route path="/" exact component={AboutMe} />
          <Route path="/game" component={GameXO} />
          <Route path="/login" component={FormLogin} />
        </main>
      </BrowserRouter>
    );
  }
}
