
import React, { Component } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap';

export default class HomeNavbar extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
            <Navbar bg="light" bgexpand="lg">
                <Navbar.Toggle/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav justify variant="pills" defaultActiveKey="/home" className="mr-auto">
                        <Nav.Item >
                        <Button className="nav-button"variant="outline-success">Eat</Button>
                        </Nav.Item>
                        <Nav.Item>
                        <Button className="nav-button" variant="outline-success">Drinks</Button>
                        </Nav.Item>
                        <Nav.Item>
                        <Button className="nav-button" variant="outline-success">Sleep</Button>
                        </Nav.Item>
                        <Nav.Item>
                        <Button className="nav-button" variant="outline-success">Shop</Button>
                        </Nav.Item>
                        <Nav.Item>
                        <Button className="nav-button" variant="outline-success">Service</Button>
                        </Nav.Item>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/#/signin">SignIn</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}