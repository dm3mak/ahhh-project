
import React, { Component } from 'react'
import { Col, Container, Form, Row,  Button } from 'react-bootstrap'


export default class AddPage extends Component {
    render() {
        return (
            <div className="p-add">
                <Container>
                <Form>
                    <Row>
                        <h1 className="text-center">Let's Begin</h1>
                        <h3 >Step 1 : Choosing an page of promotion</h3>
                        <Col xs={12}>
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
                        <h3 >Step 2 : Filling promotion information</h3>
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="max 30 Characters"  maxLength="30" />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group>
                                <Form.Label>Please Insert Your Image Url</Form.Label>
                                <Form.Control type="text" placeholder="only 1 url" />
                            </Form.Group>
                        </Col>
                        
                        <Col xs={6} lg={2}>
                            <Row></Row>
                            <Form.Group >
                                <Form.Label>Happy Hour Starts at</Form.Label>
                                <Form.Control as="select"  >
                                    <option>00:00</option>
                                    <option>01:00</option>
                                    <option>02:00</option>
                                    <option>03:00</option>
                                    <option>04:00</option>
                                    <option>05:00</option>
                                    <option>06:00</option>
                                    <option>07:00</option>
                                    <option>08:00</option>
                                    <option>09:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                    <option>16:00</option>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                    <option>22:00</option>
                                    <option>23:00</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={6}  lg={2}>
                            <Form.Group >
                                <Form.Label>Happy Hour Ends at</Form.Label>
                                <Form.Control as="select" >
                                    <option>01:00</option>
                                    <option>02:00</option>
                                    <option>03:00</option>
                                    <option>04:00</option>
                                    <option>05:00</option>
                                    <option>06:00</option>
                                    <option>07:00</option>
                                    <option>08:00</option>
                                    <option>09:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                    <option>16:00</option>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                    <option>22:00</option>
                                    <option>23:00</option>
                                    <option>00:00</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12}  md={6}>
                            <Form.Group >
                                <Form.Label>Please write about your business</Form.Label>
                                <Form.Control as="textarea" rows={3} maxLength ="250"/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} >
                            <Form.Group >
                                <Form.Label>Choose weekdays of promotion - You Can choose More that one option</Form.Label>
                                {/* <Form.Control as="select"  multiple >
                                    <option>Sunday</option>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                    <option>Wednesday</option>
                                    <option>Thursday</option>
                                    <option>Friday</option>
                                    <option>Saturday</option>
                                </Form.Control> */}
                                <Row>
                                  <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Sunday"/>
                                 </Col>
                                 <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Monday"/>
                                 </Col>
                                 <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Tuesday"/>
                                 </Col>
                                 <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Wednesday"/>
                                 </Col>
                                 <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Thursday"/>
                                 </Col>
                                 <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Friday"/>
                                 </Col>
                                 <Col xs={4}  >
                                 </Col>
                                 <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Saturday"/>
                                 </Col>
                                 </Row>
                            </Form.Group>
                        </Col>
                        
                        <Col xs={12} md={8}>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Please type the street and home number" />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                        <Form.Group >
                                 <Form.Label>City</Form.Label>
                                <Form.Control placeholder="Please type the city" />
                            </Form.Group>
                        </Col>
                        <h3 >Step 3 : Providing More Information and More Images for your own page</h3>
                        <Col xs={12}  md={6}>
                            <Form.Group >
                                <Form.Label>Please write more information</Form.Label>
                                <Form.Control as="textarea" rows={4} maxLength ="800"/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} >
                            <Form.Group>
                                <Form.Label>Place here more Images</Form.Label>
                                <Form.Control type="text" placeholder="only 1 url" />
                                <Form.Control type="text" placeholder="only 1 url" />
                                <Form.Control type="text" placeholder="only 1 url" />
                            </Form.Group>
                        </Col>
                        <Button type="submit">Click Here To Place Your Happy Hour</Button>
                    </Row>
                </Form>
                </Container>
            </div>
        )
    }
}