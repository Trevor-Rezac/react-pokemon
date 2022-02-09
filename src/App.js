
import './App.css';
import { React } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PokemonPage from './PokemonPage';


function App() {


  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <PokemonPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
