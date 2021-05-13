import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignupPage extends Component {
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><h4>Back to home page</h4>
                    </Link>
            </div>
        )
    }
}