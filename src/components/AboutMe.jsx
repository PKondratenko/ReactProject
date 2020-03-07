import React from "react";
import Potato from "./Potato";

export default class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <h2>Приветствую мой дорогой друг!</h2>
        <p>
          Изначально я планировал сделать сайт про себя любимого, но это скучно.
          Поэтому я покажу, как сделать кальян на чаше из картошки :)
        </p>
        <Potato />
      </div>
    );
  }
}
