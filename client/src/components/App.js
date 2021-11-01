

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Home from './Home'
import Navbar from './NavBar'
import SignUp from './SignUp';
import Login from './Login'
import logo from './xrayicon.png'
import Post from './Post'


function App() {
 
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const history = useHistory();
  const [caseData, setCase] = useState([]);
  const [errors, setErrors] = useState([]);



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
    fetch("https://secret-beyond-37975.herokuapp.com/https://openi.nlm.nih.gov/api/search?coll=mpx&m=1&n=2")
    .then(r => r.json())
    .then(data =>{
          //  console.log(data)
         
          //  debugger
          
          setCase([...new Map(data.list.map(c => [c => c.uid(c), c])).values()])
           
          })
  }, [])

  
  // const loginUser = (u) => {
  //   setLoggedIn(true)
  //   setUser(u)
  //   history.push("/")
  // } 

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

  return (

    <div className="App">
            <div className="App_header">
                <img 
                    className='App_headerImage'
                    src={logo}
                    alt=""
                />
                <Navbar user={user} loggedIn={loggedIn} logoutUser={logoutUser}/>
                
                
               
            </div>
          
            <h3> Chest Xray Radiograph Review</h3>
                  <Switch>
                      <Route exact path="/"  render={routerProps => <Post {...routerProps} caseData={caseData} loginUser={loginUser} errors={errors}/>} />
                      <Route exact path="/signup" render={routerProps => <SignUp {...routerProps} loginUser={loginUser} errors={errors}/>} /> 
                      <Route exact path="/login" render={routerProps => <Login {...routerProps} loginUser={loginUser} errors={errors}/>} />  
                  </Switch>

            {/* <Post caseData={caseData}></Post>  */}
            

            
     
    </div>
  );
}

export default App;
