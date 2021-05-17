import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import AddedItem from '../components/AddedItem';

class Type extends Component {
    constructor(props){
        super(props);
        this.type = this.props.match.params.type
        console.log(this.type)
    }
    render() {
        return (
            <div>
                 {/* filtered promos cards */}
                 <AddedItem
                  
                  />
                  <footer><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add"><p>Click here to add your promotion</p>
                      </Link></footer>
            </div>
        )
    }
}
export default withRouter(Type);