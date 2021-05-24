import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
                <footer>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add"><p>Click here to add your promotion</p></Link>
                </footer>
        )
    }
}
