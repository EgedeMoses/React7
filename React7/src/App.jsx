import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;