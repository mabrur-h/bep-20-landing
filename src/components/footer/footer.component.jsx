import React from "react";
import {Accordion, Button, Col, Container, Row} from "react-bootstrap";
import './footer.styles.css'
import FacebookIcon from "../../icons/facebook.svg";
import Logo from "../../logo.svg";
import TelegramIcon from "../../icons/telegram.svg";
import TwitterIcon from "../../icons/twitter.svg";
import YoutubeIcon from "../../icons/youtube.svg";

export const FooterComponent = () => {
    return (
        <footer className="site-footer">
            <Container fluid className="mx-2 px-2">
                <div>
                    <Row className="mx-2 px-2">
                        <Col md={3} className="d-flex align-items-center flex-column">
                            <div className="footer-logo">
                                <a href="#" className="d-block">
                                    <img src={Logo} alt="bep-20" width="170" />
                                </a>
                            </div>
                            <ul className="footer-sm-list mt-5 pt-5 list-unstyled d-flex">
                                <li className="footer-sm-item me-2">
                                    <a href="#" className="d-block footer-sm-link-wrapper"><img src={TelegramIcon} alt="telegram"/></a>
                                </li>
                                <li className="footer-sm-item mx-2">
                                    <a href="#" className="d-block footer-sm-link-wrapper"><img src={TwitterIcon} alt="telegram"/></a>
                                </li>
                                <li className="footer-sm-item mx-2">
                                    <a href="#" className="d-block footer-sm-link-wrapper"><img src={FacebookIcon} alt="telegram"/></a>
                                </li>
                                <li className="footer-sm-item mx-2">
                                    <a href="#" className="d-block footer-sm-link-wrapper"><img src={YoutubeIcon} alt="telegram"/></a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={9} className="site-footer-row">
                            <Row className="d-flex justify-content-between">
                                <ul className="col-6 col-md-6 col-lg-3 footer-list list-unstyled">
                                    <h4 className="text-uppercase fw-normal mb-5 footer-list-title">
                                        Partners
                                    </h4>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            Valued Partners
                                        </a>
                                    </li>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            Grants
                                        </a>
                                    </li>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            Join Us
                                        </a>
                                    </li>
                                </ul>
                                <ul className="col-6 col-md-6 col-lg-3 footer-list list-unstyled">
                                    <h4 className="text-uppercase fw-normal mb-5 footer-list-title">
                                        Resources
                                    </h4>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            In the news
                                        </a>
                                    </li>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            Developers
                                        </a>
                                    </li>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            Bug Bounty
                                        </a>
                                    </li>
                                </ul>
                                <ul className="col-6 col-md-6 col-lg-3 footer-list list-unstyled">
                                    <h4 className="text-uppercase fw-normal mb-5 footer-list-title">
                                        Solutions
                                    </h4>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            Decentralized Finance
                                        </a>
                                    </li>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            SEC-Registred Offerings
                                        </a>
                                    </li>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            Security Tokens
                                        </a>
                                    </li>
                                </ul>
                                <ul className="col-6 col-md-6 col-lg-3 footer-list list-unstyled">
                                    <h4 className="text-uppercase fw-normal mb-5 footer-list-title">
                                        Company
                                    </h4>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            About us
                                        </a>
                                    </li>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            Leadership
                                        </a>
                                    </li>
                                    <li className="footer-item mb-4">
                                        <a href="#" className="footer-item-link">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </Row>
                        </Col>

                    </Row>
                </div>
                <div className="mx-2 px-2 w-100">
                    <div className="footer-upper">
                        <div className="footer-copyright d-flex flex-column">
                            <h4 className="text-uppercase text-white">copyright © 2022</h4>
                            <p className="text-uppercase text-white fw-normal">All rights reservered | <a href="#" className="text-white">Privacy</a></p>
                        </div>
                        <div className="social-networks">
                            <h2 className="fw-bold text-white">Social</h2>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}