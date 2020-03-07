import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/index.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import GameXO from "./components/GameXO/GameXO";
import Navigation from "./components/Navigation/Navigation";
import LoginForm from "./components/LoginForm/LoginForm";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navigation />
          <Route path="/" exact component={AboutMe} />
          <Route path="/game" component={GameXO} />
          <Route path="/login" component={LoginForm} />
        </main>
      </BrowserRouter>
    );
  }
}
