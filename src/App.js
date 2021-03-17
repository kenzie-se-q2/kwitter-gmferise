import { Switch, Route } from 'react-router-dom';
import MessageList from './components/MessageList';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Login from './components/Login';
import 'semantic-ui-css/semantic.min.css';
import Navigation from "./components/Navigation"
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render={() => <Login />} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
