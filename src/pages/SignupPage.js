import React, { Component } from 'react'
import { Container, Form } from 'react-bootstrap'
import './SignupPage.css';
export default class SignupPage extends Component {
    constructor(props){
        super(props);
        this.state={
            fname: '',
            lname: '',
            email: '',
            password: '',
            validated: false
        }
    }
    handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log(form);
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          this.setState({validated:true});
        }
        else{
            this.createUser()
        }
        
      };

    createUser = () =>{
        const newUserObj = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password
        }
        this.props.addUser(newUserObj);
        window.location.href="#/";
    }
    render() {
        return (
            <div className="p-signup">
            <Container className ="mt-5">
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" onChange={(e)=>this.setState({fname:e.target.value})} required/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please enter your first name.</Form.Control.Feedback>
            </div>
            
            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" onChange={(e)=>this.setState({lname:e.target.value})} required/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please enter your last name.</Form.Control.Feedback>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>this.setState({email:e.target.value})} required/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>this.setState({password:e.target.value})} required/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
            </div>

            <button type="submit" className="btn btn-primary btn-block mt-3">Sign Up</button>
            <p className="forgot-password text-right mt-3">
                Already registered <a href="#/signin">sign in?</a>
            </p>
            </Form>
       </Container>
       </div>
        )
    }
}