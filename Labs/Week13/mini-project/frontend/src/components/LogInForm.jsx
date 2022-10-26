import React from 'react';
import {useState} from 'react';
import * as usersService from '../utilities/users-service';

function LogInForm({setUser}) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (event) => {
        setCredentials({...credentials, [event.target.name]: event.target.value});
        setError('');
    }

    const handleSubmit = async (event) => {
        // Prevent form from being submitted to the server
        event.preventDefault();

        try {
            // The promise returned by signUp service method will resolve to user object included in the payload of JSON Web Token (JWT)
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError('Log in failed! Try again.');
        }
    }

    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <button type="submit">Log in</button>
                </form>
            </div>
            <p className="error-message">{error}</p>
        </div>
    )
}

export default LogInForm