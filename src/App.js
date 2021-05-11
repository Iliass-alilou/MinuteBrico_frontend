import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import Signup from "./componants/auth/signup";
import SignUpEtape2 from "./componants/auth/signUpEtape2";
import Login from "./componants/auth/login";
import Home from "./componants/home/index";
import Mission from "./componants/home/MissionsComponent";
import Empty from "./componants/shared/empty"
import Container from "./componants/formmission/container";
import React from 'react';
import ProtectedRoute from "./ProtectRoute";
import { AuthProvider } from "./componants/context/AuthContext";
import ContainerBrico from "./componants/switchBrico/containerBrico";
import ContainerAuth from "./componants/authentification/containerAuth";
import WelcomeBricoPage from "./componants/welcomeBricoPage/WelcomeBricoPage";
import Review from "./componants/Reviews/review";

//<AuthProvider> </AuthProvider>
function App() {

  return (
    <AuthProvider>
      <Router> 
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>

          <Route exact path="/home" >
            <Home />
          </Route>


          <Route exact path="/signup" >
            <ContainerAuth />
          </Route>

          <ProtectedRoute exact path="/profile_brico" >
            <WelcomeBricoPage />
          </ProtectedRoute>
          
          {/*     test Reviews      */}

          <ProtectedRoute exact path="/evaluate_brico">
            <Review />
          </ProtectedRoute>

       

          <Route exact path="/login" >
            <Login />
          </Route>

       

          <Route exact path="/missions" >
            <Mission />
          </Route>

          {/*  this for showing page of brico  */}

          <ProtectedRoute exact path="/profile_brico" >
            <WelcomeBricoPage />
          </ProtectedRoute>




          <ProtectedRoute exact path="/createmissions" >
            <Container />
          </ProtectedRoute>

          <ProtectedRoute exact path ="/switchToBricoleur">
            <ContainerBrico />
          </ProtectedRoute>

        </Switch>
      </Router>
 
    </AuthProvider>
  );
}

export default App;
