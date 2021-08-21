import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import RegistrationScreen from './components/RegistrationScreen';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MainScreen} />
        <Route path="/register" exact={true} component={RegistrationScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;