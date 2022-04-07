import React from 'react'
import { Link } from 'react-router-dom'

// import '../../App.css'
import '../../Register.css';

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <form action="/home">
            {/* <div className="heading1"> */}
            <h2><b>Create account</b></h2>
            {/* </div> */}
            {/* <br></br> */}
                <p>
                    {/* <label>Name</label><br/> */}
                    <input type="text" name="first_name" placeholder='Name' required />
                </p>
                <p>
                    {/* <label>Username</label><br/> */}
                    <input type="text" name="user_name" placeholder='Username' required />
                </p>
                <p>
                    {/* <label>Email</label><br/> */}
                    <input type="email" name="email" placeholder='Email' id="email" required />
                </p>

                <p>
                    {/* <label>Password</label><br/>
                    <input type="password" name="password" requiredc /> */}
                     <input type="password" name="password" placeholder='Password' autoComplete="off" required />
                </p>
                    {/* <div className="checkbox"> */}
                <p>
                    <input type="checkbox" name="checkbox" id="right-label" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of services</a></span>
                </p>
                    {/* </div> */}

                    <div className="reg_btn">
                <p>
                    <button id="reg_btn" type="submit">Register</button>
                </p>
                    </div>
                {/* <br></br> */}
            <div class="login">
                <p><Link to="/login">Having an account?Login</Link></p>
            </div>
            </form>
        </div>
    )

}
