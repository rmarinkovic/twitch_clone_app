import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
        window.gapi.client.init({
          clientId:
            "1051756804843-9g9tm1ff4ebggnl1gp8tjc0fjfk649iq.apps.googleusercontent.com",
            scope: "email"
        });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
