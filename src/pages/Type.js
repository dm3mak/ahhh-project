import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import AddedItem from '../components/AddedItem';
import { v4 as uuidv4 } from 'uuid';
import { Col, Form, Row } from 'react-bootstrap';

class Type extends Component {
    constructor(props){
        super(props);
        this.state = {
            valueTitle : "",
            valueCity: "",
            valueWeekday:"",
            valueStartHours:""
        }
    }
    showTypedTitle = (event) => {
        this.setState({valueTitle : event.target.value})
    }
    showTypedCity = (event) => {
        this.setState({valueCity : event.target.value})
    }
    showChoosenWeekday = (event) => {
        this.setState({valueWeekday : event.target.value})
    }
    showChoosenHour = (event) => {
        this.setState({valueStartHours : event.target.value})
    }
    render() {
        
        this.type=this.props.match.params.type
        const filteredItems = this.props.allPromos.filter((item) => {
            return this.type == item.type
        })
        .filter (item => item.title.toLowerCase().includes(this.state.valueTitle.toLowerCase()))
        .filter (item => item.city.toLowerCase().includes(this.state.valueCity.toLowerCase()))
        .filter (item => item.weekdays.includes(this.state.valueWeekday)||this.state.valueWeekday==="")
        .filter (item => item.start.includes(this.state.valueStartHours)||this.state.vvalueStartHours==="")
        .map ((item) => {
            return <AddedItem item={item} key={uuidv4()}/>
        })
        
        return (
            <div>
                
                <div className="container-fluid px-5 ">
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <Form.Label>Please choose type of promotion</Form.Label>
                        <Form.Control type="text" placeholder="Search by title" onChange={ this.showTypedTitle}/>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Form.Label>Please choose type of promotion</Form.Label>
                        <Form.Control type="text" placeholder="Search by city" onChange={ this.showTypedCity}/>
                    </Col>
                    <Col xs={6} lg={3}>
                        <Form.Group >
                            <Form.Label>Filter by day on week</Form.Label>
                            <Form.Control as="select" onChange={ this.showChoosenWeekday}>
                                <option value="">All days</option>
                                <option value="Sunday">Sunday</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={6} lg={3}>
                        <Form.Group >
                            <Form.Label>Filter by Starting hour</Form.Label>
                            <Form.Control as="select" onChange={ this.showChoosenHour}>
                                <option value="">All hours</option>
                                <option value="00:00">00:00</option>
                                <option value="01:00">01:00</option>
                                <option value="02:00">02:00</option>
                                <option value="03:00">03:00</option>
                                <option value="04:00">04:00</option>
                                <option value="05:00">05:00</option>
                                <option value="06:00">06:00</option>
                                <option value="07:00">07:00</option>
                                <option value="08:00">08:00</option>
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                                <option value="22:00">22:00</option>
                                <option value="23:00">23:00</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                </div>
                    {filteredItems}
                <footer>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add"><p>Click here to add your promotion</p></Link>
                </footer>
            </div>
        )
    }
}
export default withRouter(Type);