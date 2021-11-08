

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Navbar from './NavBar'
import SignUp from './SignUp';
import Login from './Login'
import logo from './xrayicon.png'
import Post from './Post'
import './App.css'
import Cases from './Cases'
import Case from './Case'
import CaseLink from './CaseLink'


function App() {
 
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const history = useHistory();
  const [caseData, setCase] = useState([]);
  const [errors, setErrors] = useState([]);
  const [saved, setSaved] = useState([]);

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

  useEffect(() => {
    fetch("https://secret-beyond-37975.herokuapp.com/https://openi.nlm.nih.gov/api/search?coll=mpx&it=x&m=12&n=27")
    .then(r => r.json())
    .then(data =>{  
          setCase([...new Map(data.list.map(c => [c => c.pmcid(c), c])).values()])
          })
  }, [])

  const loginUser = (user) => {
    if (!user.errors) {
      setLoggedIn(true)
      setUser(user)
      history.push('/')
    } 
    else {
      setErrors(user.errors)
      
    }
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

  const clearErrors = () => {
    setErrors([])
  }

  const addCase = (c) => {
    fetch('/cases', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: c.title,
      image: 'https://openi.nlm.nih.gov'+c.imgLarge,
      caption: c.image.caption,
      
    })
  })
    .then(r => r.json())
    .then(data => {
            console.log(data)
        })
  }

  return (
    <div className="App">
             <div className="App_header">
                <img 
                    className='App_headerImage'
                    src={logo}
                    alt=""
                />
                <h3>Case Study Review</h3>
                
                <Navbar user={user} loggedIn={loggedIn} logoutUser={logoutUser} clearErrors={clearErrors}/>
            </div>
          
            
                  <Switch>
                      <Route exact path="/"  render={routerProps => <Post {...routerProps} caseData={caseData} loginUser={loginUser} errors={errors} loggedIn={loggedIn} addCase={addCase}/>} />
                      <Route exact path="/signup" render={routerProps => <SignUp {...routerProps} loginUser={loginUser} errors={errors}/>} /> 
                      <Route exact path="/login" render={routerProps => <Login {...routerProps} loginUser={loginUser} errors={errors}/>} />  
                      <Route exact path="/cases" render={routerProps => <Cases {...routerProps} saved={saved} user={user} loginUser={loginUser} errors={errors} />} />  
                      <Route path="/cases/:id" render={routerProps => <Case {...routerProps} saved={saved} user={user} loginUser={loginUser} errors={errors} />}/>
                  </Switch>     
    </div>
  );
}

export default App;
