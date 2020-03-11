import React from "react";

export default function Login(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = event => {
    event.preventDefault();
    props.login(username, password);
  };
  return (
    <form onSubmit={onSubmit}>
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
    </form>
  );
}
