import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from "./component/Hero"
import Signin from './component/Signin';
import Signup from './component/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Hero />
        </Route>
        </Switch>
      </Router>
      {/*<Hero />*/}
      {/*<Signin />*/}
      {/*<Signup />*/}
    </div>
  );
}

export default App;
