import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// import './NavBar.css'

const Navbar = (props) => {

    if (props.loggedIn) {
        return (
            <div className="Navbar">
                <br/>
                    <Link to="/"> <button> {props.username} Home </button> </Link>
                    
                    <Link to="/cases"> <button> {props.user.name}'s Saved Cases </button> 
                    
                    </Link> <button onClick={props.logoutUser}>Logout</button>
            </div>
        )
    } else {
        return (
        <div className="Navbar">
            <Link to="/"> <button> {props.username} Home </button> </Link>
            <br/>
            <Link to="/signup" >
                <button onClick={props.clearErrors}>Signup</button>
            </Link>
            <br/>
            <Link to="/login" >
                <button onClick={props.clearErrors}>Login</button>
            </Link>
        </div>
        )
    }
    
}
export default Navbar