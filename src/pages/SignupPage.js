import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class SignupPage extends Component {
    constructor(props){
        super(props);
        this.state={
            fname: '',
            lname: '',
            email: '',
            password: ''
        }
    }
    createUser = () =>{
        const newUserObj = {
            fname: this.state.name,
            lname: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        this.props.addUser(newUserObj);
        window.location.href="/#/";
    }
    render() {
        return (
            <Container>
            <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" onChange={(e)=>this.setState({fname:e.target.value})}/>
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" onChange={(e)=>this.setState({lname:e.target.value})}/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>this.setState({email:e.target.value})}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>this.setState({password:e.target.value})}/>
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={this.createUser}>Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/#/signin">sign in?</a>
            </p>
        </form>
       </Container>
        )
    }
}