import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import HomeJumbotron from '../components/HomeJumbotron';
import './HomePage.css';



class HomePage extends Component {
    
    render() {
        
        const shuffled =  this.props.allPromos.sort( (a,b) => 0.5 - Math.random());
        const randomPromos = [];
        for(let i =0; i<6;i++){
            const promotion = shuffled[i];
            randomPromos.push(
                <Col xl="4" lg="6" xs="12" className="card-wrapper">
                    <div className="card border-0">
                        <div className="position-relative  overflow-hidden mx-auto custom-image">
                            <img className="w-100 h-100" src={promotion.img} alt={promotion.title}/>
                        </div>
                        <div className="card-body text-center mt-4">
                            <article className="title">
                                <h5 className="text-uppercase card-title">{promotion.title}</h5>
                            </article>
                            <article className="about">
                            <p className="card-text">{promotion.about}</p>
                            </article>
                            <article className="info">
                            <p >Happy Hours: {promotion.start} - {promotion.end} on ({promotion.weekdays.join(', ')})</p>
                            <p ><small>Address: {promotion.address}, {promotion.city}</small></p>
                            </article>
                            <section className="text-center">
                                <a href={`/#/promotion/${promotion.id}`} className="btn btn-primary">More Info</a>
                            </section>
                        </div>
                    </div>
                </Col>
            )
        }
        return (
            
            <div className="p-home">
                <HomeJumbotron/>
                <Container>
                   <h1 className="text-center">There you can see  random Happy-Hour promotions</h1>
                    <Row>
                    {randomPromos}
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default HomePage