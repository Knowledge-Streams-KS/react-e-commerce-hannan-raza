import AppRoutes from "./AppRoutes/AppRoutes";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import "./App.css";

function App() {
  // const [user, setUser] = useState({});

  // const handleCallbackResponse = (response) => {
  //   console.log(response.credential);
  //   var userObject = jwt_decode(response.credential);
  //   console.log(userObject);
  //   setUser(userObject);
  //   document.getElementById("SignInDiv").hidden = true;

  //   localStorage.setItem("token", response.credential);
  // };
  // useEffect(() => {
  //   /*global google*/
  //   google.accounts.id.initialize({
  //     client_id:
  //       "651787101563-jr62bq2557su6569g5ujeceekt026hko.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });
  //   google.accounts.id.renderButton(document.getElementById("SignInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, []);
  // const handleSignout = (e) => {
  //   setUser({});
  //   document.getElementById("SignInDiv").hidden = false;
  //   document.getElementById("img-div").hidden = true;
  //   localStorage.clear();
  // };

  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <div id="SignInDiv"></div>

      {Object.keys(user).length !== 0 && (
        <button
          onClick={(e) => {
            handleSignout(e);
          }}
        >
          Sign Out
        </button>
      )}

      {user && (
        <div id="img-div">
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      )} */}
      <AppRoutes />
    </div>
  );
}

export default App;
