import {BrowserRouter as Router,Route} from "react-router-dom"
import Signup from "./componants/auth/signup";
import Login from "./componants/auth/login";
import Home from "./componants/home/index"

function App() {
  return (
    <Router>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route exact path="/signup" >
        <Signup />
      </Route>
      <Route exact path="/login" >
        <Login />
      </Route>

    </Router>
  );
}

export default App;
