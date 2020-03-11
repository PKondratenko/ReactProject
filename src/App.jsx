import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./styles/index.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import GameXO from "./components/GameXO/GameXO";
import Login from "./components/Login";
import withLogin from "./hocs/withLogin";

export default class App extends React.Component {
  render() {
    return (
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
        <Switch>
          <Route path="/" exact component={AboutMe} />
          <Route path="/game" component={withLogin(GameXO)} />
          <Route path="/login" component={Login} />
        </Switch>
      </main>
    );
  }
}
