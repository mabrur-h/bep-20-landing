import React, {useEffect} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import './fast-speed.styles.css'
import Triangle from "../../icons/triangle.svg";
import Aos from "aos";
import "aos/dist/aos.css"

export const FastSpeedComponent = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])
    return (
        <section id="fast-speed" className="py-5">
            <Container fluid className="py-5">
                <div className="row align-items-center justify-content-center my-5 py-5">
                    <div className="col-6 d-flex align-items-center justify-content-center" data-aos="fade-right">
                        <div className="fast-speed-img">
                            <img src="./img/round-shape.png" alt="round" width="800" />
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center" data-aos="fade-left">
                        <div className="d-flex align-items-center justify-content-center flex-column w-75">
                            <div className="mb-5 pb-5">
                                <h2 className="display-1 fw-bold text-white info-text-title pb-5">Fast, forever</h2>
                                <p className="fast-speed-text pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa error labore magnam maiores ratione veritatis vitae? Aperiam doloremque expedita facere?</p>
                                <p className="fast-speed-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa error labore magnam maiores ratione veritatis vitae? Aperiam doloremque expedita facere?</p>
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
            </Container>
        </section>
    )
}