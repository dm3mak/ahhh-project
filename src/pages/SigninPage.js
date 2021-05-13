import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SigninPage extends Component {
    render() {
        return (
            <div className="p-signin">
               <h1>Now it's Happy-Hour to join</h1>
               <div>Please sign in</div>
               <span>New user?   </span><Link to="/signup">Sign Up</Link>
            </div>
        )
    }
}