import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddedItem extends Component {
    render() {
        const addItem = (
            <div>
                <p>I am an added item you</p>
                <Link to="/promotion">More Info</Link>
                <button>Book Now</button>
            </div>
            )
        return (
            <div>
                {addItem}
            </div>
        )
    }
}
