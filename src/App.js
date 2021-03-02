import Home from './pages/Home';
import WhatsNew from './pages/WhatsNew'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
       <div>
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/whats-new" component={WhatsNew} />
          <Redirect to="/" />
        </Switch>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
