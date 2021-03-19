import { Switch, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import Home from './views/Home';
import NotFound from './views/NotFound';
import Login from './views/Login';
import NewAccount from './views/NewAccount';

import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={NewAccount} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;