import React, { Component } from 'react';



    // Popup facebook and ask for authorization
    window.OAuth.popup("linkedin2").done(function(result) {
      console.log("linkedin:", result);
      axios
        .post("https://linkedinextension.herokuapp.com/api/users/user", {
          result
        })
        .then(response => {
          console.log(response);
          localStorage.setItem('User', response)
        });
    });

  render() {
    return (
      <div>
        <a href="http://localhost:9001/api/auth/linkedin/callback">Login with LinkedIn</a>
      </div>
    )
  }



export default Login;
