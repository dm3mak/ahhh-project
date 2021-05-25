import { Carousel, Col, Container, Row, Button, Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './PromotionPage.css';
import Footer from '../components/Footer';

 class PromotionPage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            showModal:false
        }
    }
    
    
    
    handleClose = () =>{
        this.setState({
            showModal: false,
        })
        window.location.href = "#/"

    }
    openModal = () => {
        if(  ! this.props.activeUser) {
            window.location.href = "#/signin";
            return null;
        }
        else {
            console.log("openModal");
            this.setState({showModal:true})
        }
    }


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
                        <Col xs={12} md={6} >
                        <Carousel>
                            <Carousel.Item interval={5000}>
                                <img
                                className="d-block "
                                src={promo.img}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                className="d-block "
                                src={promo.moreImg[0]}
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                            
                            
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                className="d-block "
                                src={promo.moreImg[1]}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img
                                className="d-block "
                                src={promo.moreImg[2]}
                                alt="Fourth slide"
                                />
                                <Carousel.Caption>
                                
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        </Col>
                        <Col xs={12} md={6} >
                            <section>
                                <article>
                                    <h3 className="text-center mb-5">{promo.about}</h3>
                                    <p>Happy Place: <span>{promo.address}, {promo.city}</span> </p>
                                    <p>Happy Hours:<span> {promo.start} - {promo.end}</span></p>
                                    <p>Happy Days :  <span>{promo.weekdays.join(', ')}</span></p>
                                    <Button className="mt-3 btn btn-block btn-lg btn-reserve"  onClick={this.openModal}>Reserve</Button>
                                </article>
                                
                            </section>
                        </Col>
                    </Row>
                </Container>
                <Modal  show={this.state.showModal} onHide={()=>{this.setState({showModal:false})}}> 
                    <div className="card card-change">
                        <div className="text-right cross"> <i className="fa fa-times"></i> </div>
                        <div className="card-body card-body-change text-center">
                            <img src="https://img.icons8.com/bubbles/200/000000/trophy.png"/>
                            <h4>CONGRATULATIONS!</h4>
                            <p><strong>You're in! </strong>We're happy to inform you that you've successfully completed reservation process! </p>
                            <p>You will be contacted in advance and  and get your special offer. </p>
                            <p><strong>Get ready to have fun! </strong></p>    
                            <button className="btn btn-secondary btn-square continue mx-2" onClick={()=>{this.setState({showModal:false})}}>Stay Here </button>
                            <button className="btn btn-secondary btn-square continue mx-2" onClick={this.handleClose}>Go to home page </button>
                        </div>
                    </div>
                </Modal>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(PromotionPage)