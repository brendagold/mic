
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MicInput from './components/MicInput';
import NavBar from './components/Navbar';
import MicDetails from './components/MicDetails';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/">
          <MicInput />
        </Route>
        <Route path="/micdetails">
         <MicDetails />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
