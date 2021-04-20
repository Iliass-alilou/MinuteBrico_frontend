import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import Signup from "./componants/auth/signup";
import Login from "./componants/auth/login";
import Home from "./componants/home/index";
import Mission from "./componants/home/MissionsComponent";
import Empty from "./componants/shared/empty"
import Container from "./componants/formmission/container";
import React from 'react';
import ProtectedRoute from "./ProtectRoute";
import { AuthProvider } from "./componants/context/AuthContext";
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
            <Signup />
          </Route>

          <Route exact path="/login" >
            <Login />
          </Route>

          <ProtectedRoute exact path="/devenir-brico" >
            <Empty />
          </ProtectedRoute>

          <Route exact path="/missions" >
            <Mission />
          </Route>

          <ProtectedRoute exact path="/createmissions" >
            <Container />
          </ProtectedRoute>
        </Switch>
      </Router>
 
    </AuthProvider>
  );
}

export default App;
