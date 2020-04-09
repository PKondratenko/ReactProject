import React from "react";
import GitHubLogin from "react-github-login";

class LGH extends React.Component {
  render() {
    const onSuccessGithub = response => {
      console.log(response.code);
    };

    return (
      <div className="App">
        <GitHubLogin
          clientId="915ff54de329065f5792"
          onSuccess={onSuccessGithub}
          buttonText="LOGIN WITH GITHUB"
          className="git-login"
          valid={true}
          redirectUri="e4278d1a1df9f656e9844ec7745f6b8fe4dc2e0b"
        />
      </div>
    );
  }
}

export default LGH;
