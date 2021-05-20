
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
            promoMoreImg: [],
            validated: false    
        }
    }
    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          this.setState({validated:true});
        }
        else{
            this.saveInfo()
        }
        
      };
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
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Row>
                        <h1 className="text-center">Let's Begin</h1>
                        <h3 >Step 1 : Choosing an page of promotion</h3>
                        <Col xs={12}>
                            <Form.Group >
                                <Form.Label>Please choose type of promotion</Form.Label>
                                <Form.Control as="select" onChange={(event)=> {this.setState({promoType: event.target.value})}} required>
                                    <option disabled selected value="">Select your option</option>
                                    <option value="Eat">Eat</option>
                                    <option value="Drink">Drink</option>
                                    <option value="Sleep">Sleep</option>
                                    <option value="Shop">Shop</option>
                                    <option value="Services">Services</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">Please choose Option.</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <h3 >Step 2 : Filling promotion information</h3>
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="max 30 Characters"  maxLength="30" onChange={(event)=> {this.setState({promoTitle: event.target.value})}} required/>
                                <Form.Control.Feedback type="invalid">Please enter Name of your Promo.</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group>
                                <Form.Label>Please Insert Your Image Url</Form.Label>
                                <Form.Control type="text" placeholder="only 1 url" onChange={(event)=> {this.setState({promoImg: event.target.value})}} required/>
                                <Form.Control.Feedback type="invalid">Please insert img url.</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        
                        <Col xs={6} lg={2}>
                            <Row></Row>
                            <Form.Group >
                                <Form.Label>Happy Hour Starts at</Form.Label>
                                <Form.Control as="select"  onChange={(event)=> {this.setState({promoStart: event.target.value})}} required>
                                    <option disabled selected value="">Select your option</option>
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
                        <Col xs={6}  lg={2}>
                            <Form.Group >
                                <Form.Label>Happy Hour Ends at</Form.Label>
                                <Form.Control as="select" onChange={(event)=> {this.setState({promoEnd: event.target.value})}} required>
                                <option disabled selected value="">Select your option</option>
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
                                    <option value="00:00">00:00</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12}  md={6}>
                            <Form.Group >
                                <Form.Label>Please write about your business</Form.Label>
                                <Form.Control as="textarea" rows={3} maxLength ="250" onChange={(event)=> {this.setState({promoAbout: event.target.value})}} required/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} >
                            <Form.Group >
                                <Form.Label>Choose weekdays of promotion - You Can choose More that one option</Form.Label>
                                
                                <Form.Group required>
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
                            </Form.Group>
                        </Col>
                        
                        <Col xs={12} md={8}>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Please type the street and home number" onChange={(event)=> {this.setState({promoAdress: event.target.value})}} required/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                        <Form.Group >
                                 <Form.Label>City</Form.Label>
                                <Form.Control placeholder="Please type the city" onChange={(event)=> {this.setState({promoCity: event.target.value})}} required/>
                            </Form.Group>
                        </Col>
                        <h3 >Step 3 : Providing More Information and More Images for your own page</h3>
                        <Col xs={12}  md={6}>
                            <Form.Group >
                                <Form.Label>Please write more information</Form.Label>
                                <Form.Control as="textarea" rows={4} maxLength ="800" onChange={(event)=> {this.setState({promoMoreInfo: event.target.value})}} required/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} >
                            <Form.Group>
                                <Form.Label>Place here more Images</Form.Label>
                                <Form.Control type="text" placeholder="only 1 url" onBlur={(event) =>this.imgArr(0,event.target.value)} required/>
                                <Form.Control type="text" placeholder="only 1 url" onBlur={(event) =>this.imgArr(1,event.target.value)} required/>
                                <Form.Control type="text" placeholder="only 1 url" onBlur={(event) =>this.imgArr(2,event.target.value)} required/>
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