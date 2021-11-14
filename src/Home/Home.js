import React from 'react';
import { Card, CardGroup, Carousel, } from 'react-bootstrap';
import Review from '../DashBoard/Review';
import SeeReview from '../DashBoard/SeeReview';
import FooterPage from '../Footer/FooterPage';
import "../Header/Header";
import FirstPageService from '../Services/FirstPageService';
import Services from '../Services/Services';
const Home = () => {

    return (
        <div>


            {/* Banner */}
            <div>
                <Carousel >
                    <Carousel.Item className="text-primary w-100 image-fluid">
                        <img
                            className="d-block w-100"
                            src="https://www.rangsindustries.com/wp-content/uploads/2020/07/HL7701.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-danger">
                            <h3>Phillips</h3>
                            <p>Very cheap rate better services</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.rangsindustries.com/wp-content/uploads/2020/07/HL7756.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className="text-danger">
                            <h3>Phillips</h3>
                            <p>Best Service</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.rangsindustries.com/wp-content/uploads/2020/07/HL7756.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className="text-danger">
                            <h3>Phillips</h3>
                            <p>Low cost better service</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <FirstPageService></FirstPageService>
            <div>

                <SeeReview></SeeReview>

            </div>
            <div className="m-5 p-5">
                <h1>Best 3 products in this month</h1>
                <div>


                    <CardGroup className="p-5">
                        <Card className="p-5">
                            <Card.Img variant="top" src="https://www.rangsindustries.com/wp-content/uploads/2020/07/HL7756.jpg" />
                            <Card.Body>
                                <Card.Title>Phillips</Card.Title>
                                <Card.Text>
                                    Model: PHI-GRNDR-HL7701
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="p-5">
                            <Card.Img variant="top" src="https://www.rangsindustries.com/wp-content/uploads/2020/10/HL7505.jpg" />
                            <Card.Body>
                                <Card.Title>Phillips</Card.Title>
                                <Card.Text>
                                    PHI-GRNDR-HL7505
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="p-5 w-100 fluid" >
                            <Card.Img variant="top" src="https://www.rangsindustries.com/wp-content/uploads/2020/07/HL7756.jpg" />
                            <Card.Body >
                                <Card.Title>Phillips</Card.Title>
                                <Card.Text>
                                    PHI-GRNDR-HL7756
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </div>
            </div>

        </div>
    );
};


export default Home;