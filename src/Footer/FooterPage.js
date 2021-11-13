
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./FooterPage";
import "./Footer.css";

const FooterPage = () => {
    return (
        <div color="blue" className="font-small pt-4 mt-4 bg-dark">
            <Container fluid className="text-center text-md-left">
                <Row className="text-white">
                    <Col md="6">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            Our best tour planning at low cost
                        </p>
                    </Col>
                    <Col md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="/services">Services</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/aboutus">About Us</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/addServices">Add Services</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/adminDashBoard">Admin</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-white text-center py-3">
                <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright
                </Container>
            </div>
        </div>
    );
}

export default FooterPage;
