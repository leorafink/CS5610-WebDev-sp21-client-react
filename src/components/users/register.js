import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Register = () => {
    const [user, setUser] = useState({})
    const register = () => {
        fetch("http://localhost:4000/api/register", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .catch(error => {
                console.log(error)
            })
            .then((actualUser) => {
                useHistory.push("/profile")
            })
    }
    return(
        <div>
            <h1>Register</h1>
            <input
                value={user.username}
                placeholder="username"
                className="form-control"
                onChange={(e) => setUser({...user, username: e.target.value})}/>
            <input
                type="password"
                value={user.password}
                placeholder="password"
                className="form-control"
                onChange={(e) => setUser({...user, password: e.target.value})}/>
            <input placeholder="password2" className="form-control"/>
            <select>
                <option>ADMIN</option>
                <option>FACULTY</option>
                <option>STUDENT</option>
            </select>
            <button onClick={register}>
                Register
            </button>
        </div>
    )
}

export default Register