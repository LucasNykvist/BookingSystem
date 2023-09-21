import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <div className="container mt-5">
            <form className='loginForm' action="post">
                <h2>BS | BOOKING SYSTEM | LOGIN</h2>
                <input className='inputEmail' type="text" placeholder='Enter your Email' />
                <input className='inputPassword' type="password" placeholder='Enter your Password' />
                <button className='loginButton'>LOGIN</button>
                <p>Don't Have An Account? <Link className='registerLink' to='/register'>Click Here To Register!</Link></p>
            </form>
        </div>
    )
}

export default LoginForm