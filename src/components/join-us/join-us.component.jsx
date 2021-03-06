import React, {useEffect, useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import './join-us.styles.css'
import Logo from "../../logo.svg";
import Triangle from "../../icons/triangle-2.svg";
import Aos from "aos";
import "aos/dist/aos.css"
import "react-modal-video/scss/modal-video.scss"
import ModalVideo from "react-modal-video";

export const JoinUsComponent = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])

    const [isOpen, setOpen] = useState(false)

    return (
        <section id="join-us" className="mt-5">
            <Container fluid className="mt-5 mb-2 py-3">
                <Row className="mx-5 px-5 my-5 py-5">
                    <Col data-aos="fade-right">
                        <h2 className="display-5 fw-bold text-white">Join The Fastest Growing Ecosystem</h2>
                    </Col>
                    <Col data-aos="fade-left">
                        <div className="ps-5 ms-5 join-us-card-text">
                            <img src={Logo} alt="bep-20" width="200"/>
                            <p className="m-0 mt-4 text-white pe-4 join-us-text">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet asperiores corporis esse omnis placeat quasi quisquam sed sint!
                                Eveniet, explicabo.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-5 px-5 my-5 py-5">
                    <Col className="d-none d-lg-block" />
                    <Col data-aos="fade-up" className="player-up-card">
                        <div className="join-us-card me-4 d-flex flex-column justify-content-between">
                            <div className="d-flex flex-column">
                                <h3 className="display-5 fw-bold mb-5 text-white">Say Hello</h3>
                                <p className="m-0 text-white join-us-text pe-6">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Amet asperiores corporis esse omnis placeat quasi quisquam sed
                                    sint! Eveniet, explicabo.</p>
                            </div>
                            <Button
                                className="header-button header-button-v3 btn btn-outline-dark py-3 ms-2 align-self-end">
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
                            <img src="./img/player-overlay.jpg" alt="overlay" className="player-image-overlay"/>
                        </div>
                        <div className="position-absolute play-btn-wrapper">
                            <React.Fragment>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

                                <button className="play-btn" onClick={()=> setOpen(true)}></button>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}