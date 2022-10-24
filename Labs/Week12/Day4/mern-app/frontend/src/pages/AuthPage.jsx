import React from 'react'
import SignUpForm from '../components/SignUpForm'

function AuthPage({setUser}) {
  return (
    <div>
        
        <SignUpForm setUser={setUser}/>
    </div>
  )
}

export default AuthPage