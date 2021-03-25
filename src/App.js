import { Switch, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import Home from './views/Home';
import NotFound from './views/NotFound';
import Login from './views/Login';
import NewAccount from './views/NewAccount';
import Profile from './views/Profile';
import Navigation from './components/Navigation';
import Toast from './components/Toast';

function App() {
  const history = useHistory();
  window.show404 = () => history.push('/');
  return (
    <div className="App">
      <Toast />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={NewAccount} />
        <Route exact path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>   
    </div>
  );
}

export default App;