import {BrowserRouter as Router,Route} from "react-router-dom"
import Signup from "./componants/auth/signup";
import Login from "./componants/auth/login";
import Home from "./componants/home/index";
import Mission from "./componants/home/MissionsComponent";

function App() {
  return (
    <Router>
      
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
      <Route exact path="/missions" >
        <Mission />
      </Route>
    </Router>
  );
}

export default App;
