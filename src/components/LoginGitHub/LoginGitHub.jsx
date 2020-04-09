import React from "react";

export default function LoginGitHub() {
  const goGitHub = async () => {
    const client_id = "915ff54de329065f5792";
    const client_secret = "e4278d1a1df9f656e9844ec7745f6b8fe4dc2e0b";
    const requestURL = "http://github.com/login/oauth/authorize";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", requestURL);
    xhr.onload = () => {
      console.log(xhr.response.code);
    };
    xhr.send();
  };
  return (
    <div>
      <button onClick={goGitHub}>GitHub</button>
    </div>
  );
}
