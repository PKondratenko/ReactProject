import React from "react";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }
  onEmailChange() {
    this.props.setEmailText(event.target.value);
  }
  onPasswordChange() {
    this.props.setPasswordText(event.target.value);
  }

  render() {
    return (
      <div className="windowLogin">
        <h3>Log In</h3>
        <form>
          <div>
            <input
              type="text"
              name="login"
              autoComplete="off"
              placeholder="Email"
              spellCheck="false"
              value={this.props.email}
              onChange={this.onEmailChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.props.password}
              onChange={this.onPasswordChange}
            />
          </div>
          <button>Sign In</button>
        </form>
      </div>
    );
  }
}
