
import React, { Component } from 'react'
import { Col, Container, Form, Row,  Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';

export default class AddPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            promoType: '',
            promoTitle: '',
            promoWeekdays: [],
            promoStart:'',
            promoEnd:'',
            promoAbout:'',
            promoImg:'',
            promoCity:'',
            promoAdress:'',
            promoMoreInfo:'',
            promoMoreImg: []    
        }
    }
    saveInfo = () => {
        const newPromo = {
            id: uuidv4(),
            type: this.state.promoType.toLowerCase(),
            title : this.state.promoTitle,
            weekdays : this.state.promoWeekdays,
            start: this.state.promoStart,
            end: this.state.promoEnd,
            about: this.state.promoAbout,
            img: this.state.promoImg,
            city: this.state.promoCity,
            address: this.state.promoAdress,
            moreInfo: this.state.promoMoreInfo,
            moreImg : this.state.promoMoreImg
        }
        this.props.addPromo(newPromo);
        window.location.href = `/#/type/${this.state.promoType.toLowerCase()}`;
    }
    checkBoxArr = (event) => {
        // if event.target.checked === true
        //   -> add to array(using the value)
        // else 
        // -> remove(using the value)
        if (event.target.checked === true){
        this.setState({promoWeekdays:this.state.promoWeekdays.concat([event.target.value]) })
        }
        else{
            this.setState({promoWeekdays:this.state.promoWeekdays.filter((item) => event.target.value===item.value ) })
        }  
    }
    imgArr = (index,value) => {
        const imgs=[...this.state.promoMoreImg]

        if(imgs.length&&imgs[index]&&value.length){
            imgs[index]=value
        }else if(value.length){
            imgs.push(value)
        }else{
            imgs.splice(index,1)
        }
        this.setState({promoMoreImg: imgs})
        
    }
    render() {
        if(  ! this.props.activeUser) {
            window.location.href = "/#/signin";
            return null;
        }
        
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
                                <Form.Control as="select" onChange={(event)=> {this.setState({promoType: event.target.value})}}>
                                    <option disabled selected>Select your option</option>
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
                                <Form.Control type="text" placeholder="max 30 Characters"  maxLength="30" onChange={(event)=> {this.setState({promoTitle: event.target.value})}}/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group>
                                <Form.Label>Please Insert Your Image Url</Form.Label>
                                <Form.Control type="text" placeholder="only 1 url" onChange={(event)=> {this.setState({promoImg: event.target.value})}} />
                            </Form.Group>
                        </Col>
                        
                        <Col xs={6} lg={2}>
                            <Row></Row>
                            <Form.Group >
                                <Form.Label>Happy Hour Starts at</Form.Label>
                                <Form.Control as="select"  onChange={(event)=> {this.setState({promoStart: event.target.value})}}>
                                    <option disabled selected>Select your option</option>
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
                                <Form.Control as="select" onChange={(event)=> {this.setState({promoEnd: event.target.value})}}>
                                    <option disabled selected>Select your option</option>
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
                                <Form.Control as="textarea" rows={3} maxLength ="250" onChange={(event)=> {this.setState({promoAbout: event.target.value})}}/>
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
                                 <Form.Check type="checkbox" label="Sunday" value="Sunday" onChange={this.checkBoxArr}/>
                                 </Col>
                                 <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Monday" value="Monday" onChange={this.checkBoxArr}/>
                                 </Col>
                                 <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Tuesday" value="Tuesday" onChange={this.checkBoxArr}/>
                                 </Col>
                                 <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Wednesday"  value="Wednesday" onChange={this.checkBoxArr}/>
                                 </Col>
                                 <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Thursday"  value="Thursday" onChange={this.checkBoxArr}/>
                                 </Col>
                                 <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Friday"  value="Friday" onChange={this.checkBoxArr}/>
                                 </Col>
                                 <Col xs={4}  >
                                 </Col>
                                 <Col xs={4}  >
                                 <Form.Check type="checkbox" label="Saturday"  value="Saturday" onChange={this.checkBoxArr}/>
                                 </Col>
                                 </Row>
                            </Form.Group>
                        </Col>
                        
                        <Col xs={12} md={8}>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Please type the street and home number" onChange={(event)=> {this.setState({promoAdress: event.target.value})}}/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                        <Form.Group >
                                 <Form.Label>City</Form.Label>
                                <Form.Control placeholder="Please type the city" onChange={(event)=> {this.setState({promoCity: event.target.value})}} />
                            </Form.Group>
                        </Col>
                        <h3 >Step 3 : Providing More Information and More Images for your own page</h3>
                        <Col xs={12}  md={6}>
                            <Form.Group >
                                <Form.Label>Please write more information</Form.Label>
                                <Form.Control as="textarea" rows={4} maxLength ="800" onChange={(event)=> {this.setState({promoMoreInfo: event.target.value})}}/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} >
                            <Form.Group>
                                <Form.Label>Place here more Images</Form.Label>
                                <Form.Control type="text" placeholder="only 1 url" onBlur={(event) =>this.imgArr(0,event.target.value)}/>
                                <Form.Control type="text" placeholder="only 1 url" onBlur={(event) =>this.imgArr(1,event.target.value)}/>
                                <Form.Control type="text" placeholder="only 1 url" onBlur={(event) =>this.imgArr(2,event.target.value)}/>
                            </Form.Group>
                        </Col>
                        <Button type="button" onClick={this.saveInfo}>Click Here To Place Your Happy Hour</Button>
                    </Row>
                </Form>
                </Container>
            </div>
        )
    }
}