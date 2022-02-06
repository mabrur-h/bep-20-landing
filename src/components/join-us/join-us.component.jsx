import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import './join-us.styles.css'
import Logo from "../../logo.svg";
import Triangle from "../../icons/triangle-2.svg";

export const JoinUsComponent = () => {
    return (
        <section id="join-us" className="mt-5">
            <Container fluid className="mt-5 mb-2 py-3">
                <Row className="mx-5 px-5 my-5 py-5">
                    <Col>
                        <h2 className="display-5 fw-bold text-white">Join The Fastest Growing Ecosystem</h2>
                    </Col>
                    <Col>
                        <div className="ps-5 ms-5">
                            <img src={Logo} alt="bep-20" width="200" />
                            <p className="m-0 mt-4 text-white pe-4 join-us-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores corporis esse omnis placeat quasi quisquam sed sint! Eveniet, explicabo.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-5 px-5 my-5 py-5">
                    <Col />
                    <Col>
                        <div className="join-us-card me-4 d-flex flex-column justify-content-between">
                            <div className="d-flex flex-column">
                                <h3 className="display-5 fw-bold mb-5 text-white">Say Hello</h3>
                                <p className="m-0 text-white join-us-text pe-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores corporis esse omnis placeat quasi quisquam sed sint! Eveniet, explicabo.</p>
                            </div>
                            <Button className="header-button header-button-v3 btn btn-outline-dark py-3 ms-2 align-self-end">
                                <div className="px-2 m-0 mx-3 d-flex align-items-center justify-content-between">
                                    <p className="m-0">Learn More</p>
                                    <span className="header-button-arrow">
                                        <img src={Triangle} alt=">" width="20" height="15"/>
                                    </span>
                                </div>
                            </Button>
                        </div>
                    </Col>
                </Row>
                <div className="join-us-player-wrapper mx-5 px-5">
                    <div className="join-us-player position-relative">
                        <div className="image-overlay"></div>
                        <div className="join-us-player-image">
                            <img src="./img/player-overlay.jpg" alt="overlay" className="player-image-overlay" />
                        </div>
                        <div className="position-absolute play-btn-wrapper">
                            <button className="play-btn" href="#"></button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}