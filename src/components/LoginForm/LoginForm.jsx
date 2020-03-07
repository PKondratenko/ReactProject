import React from "react";
import RegistrationContainer from "../Registration/RegistrationContainer";
import { Provider } from "react-redux";
import store from "../../store";
import AuthContainer from "../Auth/AuthContainer";

export default class LoginForm extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="forms">
          <h2>Кто вы?</h2>
          <AuthContainer />
          <RegistrationContainer />
        </div>
      </Provider>
    );
  }
}
