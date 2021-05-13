import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';

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
                            <Nav.Link eventKey="link-1">Eat</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Drink</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Sleep</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Shop</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-5">Services</Nav.Link>
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