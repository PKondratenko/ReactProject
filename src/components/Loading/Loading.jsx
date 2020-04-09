import React from "react";
import "./Loading.scss";
import { Smile } from "react-feather";

export default function Loading(props) {
  const { text } = props;

  return (
    <div className="loading">
      <Smile />

      <span>{text}</span>
    </div>
  );
}
