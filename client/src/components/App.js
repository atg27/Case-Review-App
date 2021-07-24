
import '../styles/App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Home from './Home'
import Navbar from './NavBar'

function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  // const [user, setUser] = useState({})
  // const history = useHistory()
  
  const signupUser = (u) => {
    setLoggedIn(true)
    setUser(u)
    history.pushState('/')
  } 

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" render={routerProps => <SignUpForm {...routerProps} onSignup={signupUser}/>} />
  
      </Switch>
    </div>
  );
}

export default App;
