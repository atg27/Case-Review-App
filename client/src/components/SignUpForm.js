import React, {useState} from 'react'


const SignUpForm = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password,
                passwordConfirmation: passwordConfirmation
            })
        })
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <label>Password:</label>
            <input 
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <label>Confirm Password:</label>
            <input 
                type="text"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <input type="submit"/>
        </form>
    )
}
export default SignUpForm