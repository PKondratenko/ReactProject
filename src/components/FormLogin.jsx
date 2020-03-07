import React from "react";

export default class FormLogin extends React.Component {
  render() {
    return (
      <div className="windowLogin">
        <h3>Sign in with github</h3>
        <form>
          <div>
            <input
              type="text"
              name="login"
              autoComplete="off"
              placeholder="Email"
              spellCheck="false"
            />
          </div>
          <div>
            <input type="password" name="password" placeholder="password" />
          </div>
          <button>Sign In</button>
        </form>
      </div>
    );
  }
}
