import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const Navbar = (props) => {

    if (props.loggedIn) {
        return (
            <div>
                <h1>Hello {props.user.name}!</h1>
                <br/>
                
                    <button onClick={props.logoutUser}>Logout</button>
                <hr/>
            </div>
        )
    } else {
        return (
        <div>
            <br/>
            <Link to="/signup" >
                <button>Signup</button>
            </Link>
            <br/>
            <Link to="/login" >
                <button>Login</button>
            </Link>
        </div>
        )
    }
    
}
export default Navbar