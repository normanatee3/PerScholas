import React from 'react'
import LogInForm from '../components/LogInForm'
import SignUpForm from '../components/SignUpForm'
import { useState } from 'react';

function AuthPage({ user, setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
            <h3 onClick={() => setShowLogin(!showLogin)}>
                {showLogin ?
                    'SIGN UP'
                    :
                    'LOG IN'}
            </h3>
            {showLogin ?
                <SignUpForm setUser={setUser} />
                :
                <LogInForm setUser={setUser} />
                }
        </div>
    )
}

export default AuthPage