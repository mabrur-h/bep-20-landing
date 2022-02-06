import React, {useEffect} from "react";
import {Accordion, Button, Col, Container, Row} from "react-bootstrap";
import './manage-token.styles.css'
import FacebookIcon from "../../icons/facebook.svg";
import Aos from "aos";
import "aos/dist/aos.css"

export const ManageTokenComponent = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])
    return (
        <section id="manage-token" className="py-5">
            <Container fluid className="py-5 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex flex-column justify-content-center align-items-center py-5 mx-2 px-2" data-aos="fade-up">
                    <h2 className="display-2 fw-normal text-center text-white info-text-title">
                        Manage Your Token Sale
                    </h2>
                    <p className="text-white text-center info-text-upper mt-4">Everything you need to manage your token sale, before, during, and post.</p>
                </div>
                <Accordion>
                    <Accordion.Item eventKey="0" data-aos="fade-up">
                        <Accordion.Header>
                            <div className="d-flex align-items-center">
                                <span className="d-flex align-items-center justify-content-center me-4 pe-2"><img src={FacebookIcon} alt="tg"/></span>
                                <p className="m-0">Adminstrative Tools</p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className="p-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" data-aos="fade-up">
                        <Accordion.Header>
                            <div className="d-flex align-items-center">
                                <span className="d-flex align-items-center justify-content-center me-4 pe-2"><img src={FacebookIcon} alt="tg"/></span>
                                <p className="m-0">Adminstrative Tools</p>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className="p-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className="d-flex flex-column justify-content-center align-items-center py-4 mx-2 px-2" data-aos="fade-up">
                    <h2 className="display-5 fw-bold text-center text-white info-text-title">
                        Get more out of <span className="bep-20-logo"><img src="./img/logo-v2.png" alt="bep-20" width="160" /></span>
                    </h2>
                    <p className="text-white text-center info-text-upper signup-link-wrapper mt-4"><a href="#" className="signup-link">Sign Up</a> For A Demo To Learn More.</p>
                </div>
                <Button className="header-button btn btn-outline-warning py-3 me-3" data-aos="fade-up">
                    <p className="px-2 m-0 mx-3">Request A Demo</p>
                </Button>
            </Container>
        </section>
    )
}