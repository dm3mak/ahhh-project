import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './SigninPage.css';

export default class SigninPage extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    updatePass = (event)=>{
        this.setState({
           password: event.target.value
        })
    }
    updateEmail = (event)=>{
        this.setState({
            email: event.target.value
        })
    } 
    handleLogin = () => {
        // Checked the typed username and password from the controlled components
        // Check if user exists in this.props.allUsers, and if the password is correct
        // if true return the user object
        // if false - show alert - password/ used not found
        const foundUser = this.props.allUsers.find( (user) => {
            if(user.email === this.state.email && user.pwd === this.state.pwd){
                return true
            }
        });
        if(foundUser){
            this.props.login(foundUser);
            window.location.href="#/";
        }
        else{
            alert("Email or Password incorrect")
        } 
    }
    render() {
        return (
            <div className="p-signin">
            <Container className="mt-5">
                
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.updateEmail} value = {this.state.email}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.updatePass} value = {this.state.password}/>
                </div>

                
                <button type="button" className="btn btn-primary btn-block mt-3" onClick={this.handleLogin} variant ="success">Submit</button>
                <p className="forgot-password text-right mt-3">
                   New Member? <a href="#/signup">SignUp</a>
                </p>
            </form>
            
            </Container>
            </div>
        );
    }
}