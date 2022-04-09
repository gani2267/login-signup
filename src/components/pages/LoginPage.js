import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
           
            <form action="/home">
        <h2>   <b>Welcome</b> </h2>
                <p>

                    <input type="email" name="email" placeholder='Email' id="email" required />
                </p>
                    <div class="text">

                <p>

                   
               
                    <input type="password" name="password" placeholder='Password' autoComplete="off" required />
                </p>
                    </div>
                <div>

             <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>Remember me </span>.
                </p>
            </div>
           
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
                <br></br>
            <footer>
          
                <p>Didn't have an account? <Link to="/register">Create an account</Link></p>

            </footer>
            </form>
        </div>
    )
}
