import React from 'react'
import { Link } from 'react-router-dom'

// import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header>
            {/* <p className="main-para text-center"></p> */}
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="landing-buttons1" id="lan_btn"><span>log in</span></button>
                </Link>
                {/* <Link to="/login">
                    <button className="landing-buttons1" id="reg_btn"><span>log in</span></button>
                </Link> */}
                <Link to="/register">
                    <button className="landing-buttons" id="lan_btn" ><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}