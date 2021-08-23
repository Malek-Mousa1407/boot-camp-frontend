import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import RegistrationScreen from './components/RegistrationScreen';
import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MainScreen} />
        <Route path="/register" exact={true} component={RegistrationScreen} />
        <Route path="/login" exact={true} component={LoginScreen} />
        <Route path="/profile" exact={true} component={ProfileScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;