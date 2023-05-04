// import React from 'react';

// const Login = () => {
//   return (
//     <form>
//       <label htmlFor="email">Email: </label>
//       <input type="email" placeholder="youremail@illinois.edu" id="email" name="email" />
//       <label htmlFor="password">Password: :</label>
//       <input type="pasword" placeholder="*******" id="password" name="password" />
//     </form>
//   );
// };

// export default Login;
import React, { useState } from "react";
//import Calendar from "./calendar";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    //const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = 'https://www.illinois.edu';
        //window.location.href = '/calendar.html';
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@illinois.edu" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button> 
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}


//@https://youtu.be/Y-XW9m8qOis