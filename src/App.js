import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
