import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function resetPage() {
    return (
        <div className="text-center m-5-auto">
            {/* <h2>Sign in to us</h2> */}
            <form action="/home">
                <p>
                    <label>Set Password</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Duplicate Password</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn2" type="submit">Set Password and Login</button>
                </p>
            
            <footer>
                {/* <p>First time? <Link to="/register">Create an account</Link>.</p> */}
                {/* <button id="sub_home" type="submit"><Link to="/">Back to Home</Link></button> */}
                <p ><Link to="/">Back to Home</Link></p>
            </footer>
            </form>
        </div>
    )
}
