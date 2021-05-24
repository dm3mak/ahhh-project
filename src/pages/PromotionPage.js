import { Carousel, Col, Container, Row } from 'react-bootstrap'
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './PromotionPage.css';
 class PromotionPage extends Component {
     
    render() {
        const promo = this.props.allPromos.find((promo) => promo.id == this.props.match.params.id)
        return (
            <div className="p-promotion">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4 text-center">{promo.title}</h1>
                            <p className="lead text-center">{promo.moreInfo}</p>
                        </div>
                    </div>
                    
                    <Container fluid>
                        <Row>
                    <Col xs={12} md={5} >
                    <Carousel>
                    
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block "
                            src={promo.img}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block "
                            src={promo.moreImg[0]}
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block "
                            src={promo.moreImg[1]}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                            className="d-block "
                            src={promo.moreImg[2]}
                            alt="Fourth slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                    <Col xs={12} md={5} >

                    </Col>
                    </Row>
                    </Container>
                    
            </div>
        )
    }
}
export default withRouter(PromotionPage)