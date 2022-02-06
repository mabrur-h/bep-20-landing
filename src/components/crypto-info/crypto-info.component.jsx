import React, {useEffect} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import './crypto-info.styles.css'
import LeverageIcon from "../../icons/Group.svg";
import Aos from "aos";
import "aos/dist/aos.css"

export const CryptoInfoComponent = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])
    return (
        <section id="crypto-info">
            <Container fluid>
                <div className="d-flex flex-column justify-content-center align-items-center" data-aos="fade-up">
                    <h2 className="display-2 fw-normal text-center text-white info-text-title">
                        Take full control of your crypto
                    </h2>
                    <p className="text-white text-center info-text-upper mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, adipisci consequatur cupiditate expedita harum natus perferendis repellat sit suscipit veritatis!</p>
                </div>
                <Row className="mx-5 px-5 my-5 py-5 d-flex" data-aos="fade-up">
                    <Col className="crypto-info-list d-flex align-items-center justify-content-center me-5">
                        <div className="crypto-info-wrapper w-100">
                            <div className="d-flex flex-column align-items-center text-center crypto-info-item">
                                <img src={LeverageIcon} alt="icon" width="80" />
                                <p className="text-white crypto-info-text mt-5 pt-4">Leverage up to 30x</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="crypto-info-list d-flex align-items-center justify-content-center me-5">
                        <div className="crypto-info-wrapper w-100">
                            <div className="d-flex flex-column align-items-center text-center crypto-info-item">
                                <img src={LeverageIcon} alt="icon" width="80" />
                                <p className="text-white crypto-info-text mt-5 pt-4">Leverage up to 30x</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="crypto-info-list d-flex align-items-center justify-content-center me-5">
                        <div className="crypto-info-wrapper w-100">
                            <div className="d-flex flex-column align-items-center text-center crypto-info-item">
                                <img src={LeverageIcon} alt="icon" width="80" />
                                <p className="text-white crypto-info-text mt-5 pt-4">Leverage up to 30x</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <span className="d-block py-4" />
                <Row className="mx-5 px-5 my-5 py-5 d-flex" data-aos="fade-up">
                    <Col className="crypto-info-list d-flex align-items-center justify-content-center me-5">
                        <div className="crypto-info-wrapper w-100">
                            <div className="d-flex flex-column align-items-center text-center crypto-info-item">
                                <img src={LeverageIcon} alt="icon" width="80" />
                                <p className="text-white crypto-info-text mt-5 pt-4">Leverage up to 30x</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="crypto-info-list d-flex align-items-center justify-content-center me-5">
                        <div className="crypto-info-wrapper w-100">
                            <div className="d-flex flex-column align-items-center text-center crypto-info-item">
                                <img src={LeverageIcon} alt="icon" width="80" />
                                <p className="text-white crypto-info-text mt-5 pt-4">Leverage up to 30x</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="crypto-info-list d-flex align-items-center justify-content-center me-5">
                        <div className="crypto-info-wrapper w-100">
                            <div className="d-flex flex-column align-items-center text-center crypto-info-item">
                                <img src={LeverageIcon} alt="icon" width="80" />
                                <p className="text-white crypto-info-text mt-5 pt-4">Leverage up to 30x</p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}