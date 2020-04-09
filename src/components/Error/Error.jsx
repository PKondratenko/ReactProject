import React from "react";
import { AlertTriangle } from "react-feather";
import "./Error.scss";

export default function Error(props) {
  const { error } = props;
  return (
    <div className="error">
      <AlertTriangle />
      <span>{error.message}</span>
    </div>
  );
}
