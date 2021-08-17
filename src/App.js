import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavBar />
        </Route>
        <Route path="/login">
          Login
        </Route>
        <Route>
          Not Found
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
