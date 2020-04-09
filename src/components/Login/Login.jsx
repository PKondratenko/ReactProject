import React from "react";
import Loading from "../Loading/";
import Error from "../Error/";
import LoginGitHub from "../LoginGitHub/LoginGitHub";
import LGH from "../LoginGitHub/LGH";

export default function Login(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = event => {
    event.preventDefault();
    props.login(username, password);
  };
  if (props.isLoading) {
    return <Loading text="Posts are loading... Please wait." />;
  }
  return (
    <form onSubmit={onSubmit}>
      <div>{props.error && <Error error={props.error} />}</div>
      <div>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          required
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div>
        <LoginGitHub />
      </div>
    </form>
  );
}
