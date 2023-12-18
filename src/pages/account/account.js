import './account.css'
import { useState } from 'react'

export const Account = () => {
    return (
        <div className='Account'>
            <section className="account-body">
                <div className="acoount-box">
                    <h1>Create Account</h1>
                    <p>Enter your user information</p>
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Phone"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button><a className="signinLink" href="#!">Register</a></button>
                    <p>Already have an account? <a className="createOneLink" href="#!">Login</a></p>
                </div>
            </section>
        </div>
    )
}