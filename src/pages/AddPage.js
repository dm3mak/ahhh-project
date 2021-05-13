import React, { Component } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'


export default class AddPage extends Component {
    render() {
        return (
            <div className="p-add">
                <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group >
                                <Form.Label>Please choose type of promotion</Form.Label>
                                <Form.Control as="select">
                                    <option>Eat</option>
                                    <option>Drink</option>
                                    <option>Sleep</option>
                                    <option>Shop</option>
                                    <option>Services</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="max 30 Characters"  maxLength="30" />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Upload your main business image</Form.File.Label>
                            <Form.File.Input accept=".png, .jpg, .jpeg" />
                        </Form.File>
                        </Col>
                        <Col xs={12} md={6}>
                        <Form.Group >
                                <Form.Label>Choose weekdays of promotion</Form.Label>
                                <Form.Control as="select"  size ="3" >
                                    <option>Sunday</option>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                    <option>Wednesday</option>
                                    <option>Thursday</option>
                                    <option>Friday</option>
                                    <option>Saturday</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                </Container>
            </div>
        )
    }
}