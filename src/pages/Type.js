import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import AddedItem from '../components/AddedItem';

class Type extends Component {
    constructor(props){
        super(props);
        
    }
    addItem = () => {

    }
    render() {
        //debugger;
        this.type=this.props.match.params.type
        const filteredItems = this.props.allPromos.filter((item) => {
            return this.type == item.type
        })
        .map ((item) => {
            return <AddedItem item={item}/>
        })
        
        return (
            <div>
                 {/* filtered promos cards */}
                {filteredItems}
                  <footer><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add"><p>Click here to add your promotion</p>
                      </Link></footer>
            </div>
        )
    }
}
export default withRouter(Type);