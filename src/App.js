import Home from './pages/Home';

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
       <div>
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
