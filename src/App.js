import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/cryptowatcher">
          <CssBaseline />
          <MainPage />
        </Route>
        <Route path="/cryptowatcher/login">
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
