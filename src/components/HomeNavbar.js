
import React, { Component } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import './HomeNavbar.css';
 class HomeNavbar extends Component {
    constructor(props){
        super(props);  
    }

    render() {
        
      
        const signinEl =  (!this.props.activeUser)? 
        <Nav.Link href="/#/signin">Sign In</Nav.Link>: null
        const nameEl = (this.props.activeUser) ? 
        <Nav.Link href="/"> Hello {this.props.activeUser.fname} {this.props.activeUser.lname}</Nav.Link> : null
        const logoutEl = (this.props.activeUser)?
        <Nav.Link href="/#/" onClick={() => this.props.logout()}>Logout</Nav.Link>: null
        return (
            <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <h1>Ahhh</h1>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav justify variant="pills" defaultActiveKey="/home" className="mr-auto">
                    <Nav.Link href={`/#/type/eat`}>Eat</Nav.Link>
                    <Nav.Link href={`/#/type/drink`}>Drink</Nav.Link>
                    <Nav.Link href={`/#/type/sleep`}>Sleep</Nav.Link>
                    <Nav.Link href={`/#/type/shop`}>Shop</Nav.Link>
                    <Nav.Link href={`/#/type/service`}>Service</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        {signinEl}
                        {logoutEl}
                        {nameEl}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
export default withRouter(HomeNavbar)