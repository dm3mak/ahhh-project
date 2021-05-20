
import React, { Component } from 'react'
import {Modal,  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddedItem.css';

export default class AddedItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal:false
        }
    }
    handleClose = () =>{
        this.setState({
            showModal: false,
        })
        window.location.href = "/#/"

    }

    render() {
        return (
            <div className="container-fluid px-5">
            <div className="card mb-2 col-lg-8" >
                <div className="row g-0">
                    <div className="col-lg-4  px-0">
                    <img className="card-img " src={this.props.item.img} alt={this.props.item.title}/>
                </div>
                    <div className="col-lg-4">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.item.title}</h5>
                        
                        <p className="card-text"><small>{this.props.item.address}, {this.props.item.city}</small></p>
                        <p className="card-text"><small>Happy Hours: {this.props.item.start} - {this.props.item.end}</small></p>
                        <p className="card-text"><small>Days: {this.props.item.weekdays.join(', ')}</small></p>
                        
                    </div>
                    </div>
                    <div className="col-lg-4 ">
                    <div className="card-body">
                        
                        <p className="card-text">{this.props.item.about}.</p>
                        <Link to={`/promotion/${this.props.item.id}`}>More Info</Link>
                        <div>
                        <Button variant="success" className="mr-auto pulse" onClick={()=>{this.setState({showModal:true})}}>Reserve</Button>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
            <Modal  show={this.state.showModal} onHide={()=>{this.setState({showModal:false})}}> 
                
                    <div className="card card-change">
                        <div className="text-right cross"> <i className="fa fa-times"></i> </div>
                        <div className="card-body card-body-change text-center">
                            <img src="https://img.icons8.com/bubbles/200/000000/trophy.png"/>
                            <h4>CONGRATULATIONS!</h4>
                            <p><strong>You're in! </strong>We're happy to inform you that you've successfully completed reservation process! </p>
                            <p>You will be contacted in advance and  and get your special offer. </p>
                            <p><strong>Get ready to have fun! </strong></p>    
                            <button className="btn btn-secondary btn-square continue mx-2" onClick={()=>{this.setState({showModal:false})}}>Stay Here </button>
                            <button className="btn btn-secondary btn-square continue mx-2" onClick={this.handleClose}>Go to home page </button>
                        </div>
                    
                </div>
            </Modal>
            </div>
        )
    }
}
