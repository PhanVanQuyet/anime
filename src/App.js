import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";

function App() {

  return (
      <>
          <Router>
              <Switch>
                  <Route path="/signup" component={Signup} />
                  <Route path='/' component={Home} />
              </Switch>
          </Router>
      </>
  );
}

export default App;
