
import React, { Component } from 'react'
import { Carousel, Col, Row } from 'react-bootstrap';
import './HomeJumbotron.css';

export default class HomeJumbotron extends Component {
    render() {
        return (
        <div className ="c-home-jumbotron">  
        <div className="jumbotron">
            <div className="container">
            <div className="row">
           
                <Row>
                <Col xs={12} md={6} >
                <h1 className="display-6">ANY HOUR - HAPPY HOUR!</h1>
                    <br />
                    <p className="lead">Live every hour like it’s happy hour! </p>
                    <p className="lead">Eat, drink, sleep, shop & order any type of service under one roof!.</p>
                    <br />
                    <p className="lead">We have mind-blowing discounts from any business you can think of!</p>
                    <br />
                    <a href="#/type/eat" className="text-center"><p className="display-6">Check it out</p></a>
                </Col>
                <Col xs={12} md={6} >
                <Carousel>
                            <Carousel.Item interval={3000}>
                                <img
                                className="d-block "
                                src={process.env.PUBLIC_URL + "/img/drink.jpeg"}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <p className="lead font-weight-bold">Ahhh, what a happy moment is to know when and where to order 1 drink and get 2 more for FREE! </p>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                className="d-block "
                                src={process.env.PUBLIC_URL + "/img/eat.jpeg"}
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <p className="lead font-weight-bold">Ahhh, what a crazy thing is to know where to get your favourite meal with an insane 60% off!</p>
                            
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                className="d-block "
                                src={process.env.PUBLIC_URL + "/img/shop.jpeg"}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <p className="lead font-weight-bold">Ahhh, what a beautiful thing is to know how to shop with insane 20-90% discounts!</p>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                className="d-block "
                                src={process.env.PUBLIC_URL + "/img/sleep.jpeg"}
                                alt="Fourth slide"
                                />
                                <Carousel.Caption>
                                
                                <p className="lead font-weight-bold">Ahhh, what an insane opportunity is to be updated when and how to book a suit in a top hotel with a fantastic 40% discount and a FREE breakfast! </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>         
                </Col>
                </Row>
                       
            </div>
            </div>
        </div>
        </div>  
        )
    }
}
{/* <div className="col-lg-6 mt-5">
                    <p className="lead">Ahhh, what a beautiful thing is to know how to shop with insane 20-90% discounts!</p>
                    <p className="lead">Ahhh, what a happy moment is to know when and where to order 1 drink and get 2 more for FREE! </p>
                    <p className="lead">Ahhh, what an insane opportunity is to be updated when and how to book a suit in a top hotel with a fantastic 40% discount and a FREE breakfast! </p>
                    <p className="lead">Ahhh, what a crazy thing is to know where to get your favourite meal with an insane 60% off!</p>
                    <p className="lead">Ahhh, what a pleasant surprise is to find a laundry that will wash and iron your clothes with 35% discount and return them right to your doorstep! (Delivery is FREE).</p>
                    <h1 className="display-4">ANY HOUR - HAPPY HOUR!</h1>
                    <br />
                    <p className="display-6">Live every hour like it’s happy hour! </p>
                    <p className="display-6">Eat, drink, sleep, shop & order any type of service under one roof!.</p>
                    <br />
                    <p className="display-6">We have mind-blowing discounts from any business you can think of!</p>
                    <br />
                    <a href="#/type/eat" className="text-center"><p className="display-6">Check it out</p></a>
                </div>                              
                <div className="col-lg-6 text-center">
                    <img src={process.env.PUBLIC_URL + "/img/home.jpg"}/>
                </div>       */}