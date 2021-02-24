import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import LandingImage from "./components/LandingImage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  
  //if user is NOT logged in
  if(!sessionUser) {
    return (
      <>
        {/* <Navigation isLoaded={isLoaded} /> */}
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <LandingImage />
              {/* <SplashPage /> */}
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        )}
      </>
    );
  } 
  //if user IS logged in
  else{
    return (
      <>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route path="/">
              <SplashPage />
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
          </Switch>
        )}
      </>
    );

  }

  
}

export default App;
