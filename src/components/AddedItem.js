
import React, { Component } from 'react'
import { Nav,  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddedItem.css';

export default class AddedItem extends Component {

    render() {
        // const addItem = (
        //     <div>
        //         <p>I am an added item you</p>
        //         <Link to="/promotion">More Info</Link>
        //         <button>Book Now</button> 
        //         <div>
        //         <h1>{this.props.item.title}</h1>
        //         <h2>{this.props.item.city}</h2>
        //         {addItem}
        //     </div>
        //     </div>
        //     )
        return (
            <div className="container-fluid px-5">
            <div className="card mb-2 col-md-8" >
                <div className="row g-0">
                    <div className="col-lg-4  ">
                    <img className="card-img mt-2" src={this.props.item.img} alt={this.props.item.title}/>
                </div>
                    <div className="col-lg-3">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.item.title}</h5>
                        
                        <p className="card-text"><small>{this.props.item.address}, {this.props.item.city}</small></p>
                        <p className="card-text"><small>Happy Hours: {this.props.item.start} - {this.props.item.end}</small></p>
                        <p className="card-text"><small>Days: {this.props.item.weekdays.join(', ')}</small></p>
                        
                    </div>
                    </div>
                    <div className="col-lg-5 ">
                    <div className="card-body">
                        
                        <p className="card-text">{this.props.item.about}.</p>
                        <Link to={`/promotion/${this.props.item.id}`}>More Info</Link>
                        <Button variant="success" className="mr-auto pulse">Reserve</Button>
                        
                    </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
