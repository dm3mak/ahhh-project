import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddedItem from '../components/AddedItem'
import HomeNavbar from '../components/HomeNavbar'


class HomePage extends Component {
    render() {
       
        return (
            <div className="p-home">
                <HomeNavbar
                
                />
                <AddedItem
                
                />
                <footer><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add"><p>Click here to add your promotion</p>
                    </Link></footer>
            </div>
        )
    }
}

export default HomePage