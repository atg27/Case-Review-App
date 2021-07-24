
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navbar from './NavBar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <h3>my react app</h3>
    </div>
  );
}

export default App;
