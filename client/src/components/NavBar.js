import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const Navbar = (props) => {

    if (props.loggedIn) {

    } else {
        return (
        <div>
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