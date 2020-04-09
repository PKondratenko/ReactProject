import React from "react";
import Potato from "../Potato/Potato";

export default class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <div className="greeting">
          <h2>Приветствую мой дорогой друг!</h2>
          <pre>
            Изначально я планировал сделать сайт про себя любимого, но это
            скучно. Поэтому я покажу, как сделать кальян на чаше из картошки :)
          </pre>
        </div>
        <Potato />
      </div>
    );
  }
}
