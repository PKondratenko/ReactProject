import React from "react";
import { store } from "../store";
import { Redirect } from "react-router-dom";

export default function withLogin(Component) {
  return class extends React.Component {
    render() {
      const state = store.getState();

      if (state.login.isLoginedIn) {
        return <Component {...this.props} />;
      }
      return <Redirect to="/login" />;
    }
  };
}
