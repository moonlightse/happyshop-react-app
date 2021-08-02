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
import ClientLayout from './layout/client';

function App() {
  return (
   
    <Router>
    <Switch>
      <Route path='/login' exact={true} component={Login}></Route>
      <Route path='/' exact={true} component={()=><ClientLayout page="HOME"/>}></Route>
    </Switch>
  </Router>
  );
}

export default App;
