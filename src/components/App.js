import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
// import { updateProfile } from "firebase/auth";
import { updateProfile } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        // console.log(user.displayName);
        if (user.displayName === null) {
          updateProfile(userObj, { displayName: "User" });
        }

        // setIsLoggedIn(user);
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(false);
        // setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    // setUserObj(authService.currentUser);
    const user = authService.currentUser;
    setUserObj({
      uid: user.uid,
      displayName: user.displayName,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <>
      {init ? <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj} /> : "initializing..."}
      {/* <footer>&copy;{new Date().getFullYear()} Nwitter</footer> */}
    </>
  );
}

export default App;
