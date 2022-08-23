import './App.css';
import Main from './GameInterface/Main/main';
import Home from './GameInterface/LandingPage/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/game" component={Main} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
