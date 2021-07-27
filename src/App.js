import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteWithSubRoutes,
} from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
   
    <Router>
    <Switch>
      <Route path='/' exact={true} component={Login}>

      </Route>
    </Switch>
  </Router>
  );
}

export default App;
