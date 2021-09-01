
import '../styles/App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Home from './Home'
import Navbar from './NavBar'
import SignUp from './SignUp';
import Login from './Login'


function App(props) {
 
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(()=> {
    fetch('/me')
    .then(r => {
      if (r.ok) {
        r.json()
        .then(u => {
          setLoggedIn(true)
          setUser(u)
        })
      }
    })
    
  }, [])
  
  const loginUser = (u) => {
    setLoggedIn(true)
    setUser(u)
    history.push("/")
  } 

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(() => {
      console.log('logged out')
      setLoggedIn(false)
      setUser({})
    })
    history.push('/')
  }

  return (
    <div className="App">
      <Navbar user={user} loggedIn={loggedIn} logoutUser={logoutUser}/>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/signup" render={routerProps => <SignUp {...routerProps} loginUser={loginUser}/>} /> 
        <Route exact path="/login" render={routerProps => <Login {...routerProps} loginUser={loginUser}/>} /> 
  
      </Switch>
    </div>
  );
}

export default App;
