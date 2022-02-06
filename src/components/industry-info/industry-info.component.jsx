import React, {useEffect} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import './industry-info.styles.css'
import Triangle from "../../icons/triangle.svg";
import Aos from "aos";
import "aos/dist/aos.css"

export const IndustryInfoComponent = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])
    return (
        <section id="industry-info">
            <Container fluid>
                <div className="d-flex flex-column justify-content-center align-items-center py-5 mx-2 px-2" data-aos="fade-up">
                    <h2 className="display-2 fw-normal text-center text-white info-text-title">
                        Take full control of your crypto
                    </h2>
                    <p className="text-white text-center info-text-upper mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, adipisci consequatur cupiditate expedita harum natus perferendis repellat sit suscipit veritatis!</p>
                </div>
                <div className="row align-items-center justify-content-center my-5 py-5">
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center" data-aos="fade-right">
                        <div className="fast-speed-img">
                            <img src="./img/Rectangle1.png" alt="round" width="800" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center" data-aos="fade-left">
                        <div className="d-flex align-items-center justify-content-center flex-column w-75 industry-info-row">
                            <div className="mb-lg-5 pb-lg-5">
                                <h2 className="display-1 fw-bold text-white info-text-title pb-5">Built on EHT. Owned by you.</h2>
                                <p className="fast-speed-text pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa error labore magnam maiores ratione veritatis vitae? Aperiam doloremque expedita facere?</p>
                                <p className="fast-speed-text pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa error labore magnam maiores ratione veritatis vitae? Aperiam doloremque expedita facere?</p>
                            </div>
                            <Button className="header-button header-button-v2 btn btn-outline-warning py-3 ms-2 align-self-end mt-5">
                                <div className="px-2 m-0 mx-3 d-flex align-items-center justify-content-between">
                                    <p className="m-0">Learn More</p>
                                    <span className="header-button-arrow">
                                        <img src={Triangle} alt=">" width="20" height="15"/>
                                    </span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="row flex-row-reverse align-items-center justify-content-center my-lg-5 py-lg-5">
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center mt-5 pt-5" data-aos="fade-left">
                        <div className="fast-speed-img">
                            <img src="./img/Rectangle2.png" alt="round" width="800" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center" data-aos="fade-right">
                        <div className="w-75 industry-info-row">
                            <h2 className="display-3 fw-bold text-white info-text-title pb-5">Take full advantage of everything Layer 2 has to offer</h2>
                            <ul className="industry-info-list">
                                <li className="industry-list-item d-flex align-items-start">
                                    <span className="d-block"></span>
                                    <p className="m-0">Say goodbye to eye-watering gas fees</p>
                                </li>
                                <li className="industry-list-item d-flex align-items-start">
                                    <span className="d-block"></span>
                                    <p className="m-0">Say goodbye to eye-watering gas fees</p>
                                </li>
                                <li className="industry-list-item d-flex align-items-start">
                                    <span className="d-block"></span>
                                    <p className="m-0">Say goodbye to eye-watering gas fees</p>
                                </li>
                                <li className="industry-list-item d-flex align-items-start">
                                    <span className="d-block"></span>
                                    <p className="m-0">Say goodbye to eye-watering gas fees</p>
                                </li>
                                <li className="industry-list-item d-flex align-items-start">
                                    <span className="d-block"></span>
                                    <p className="m-0">Say goodbye to eye-watering gas fees</p>
                                </li>
                                <li className="industry-list-item d-flex align-items-start">
                                    <span className="d-block"></span>
                                    <p className="m-0">Say goodbye to eye-watering gas fees</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}