import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import './trade-stats.styles.css'
import {StatsRowComponent} from "./stats-row/stats-row.component";
import CountUp from 'react-countup';
import Aos from "aos";
import "aos/dist/aos.css"


export const TradeStatsComponent = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, [])
    return (
        <section id="stats">
            <Row>
                <Col lg={3} className="stats-row-list d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center text-center">
                        <p className="text-white stats-number-upper">Transactions per second</p>
                        <CountUp className="text-white fw-bold stats-number-text"
                                 start={0}
                                 end={1306}
                                 duration={1}
                                 separator=","
                                 delay={2}
                        ></CountUp>
                    </div>
                </Col>
                <Col lg={3} className="stats-row-list d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center text-center">
                        <p className="text-white stats-number-upper">Total transactions</p>
                        <CountUp className="text-white fw-bold stats-number-text"
                                 start={0}
                                 end={52683048997}
                                 duration={3}
                                 separator=","
                                 delay={2}
                        ></CountUp>
                    </div>
                </Col>
                <Col lg={3} className="stats-row-list d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center text-center">
                        <p className="text-white stats-number-upper">Average cost per transaction</p>
                        <CountUp className="text-white fw-bold stats-number-text"
                                 start={0}
                                 end={0.00025}
                                 prefix="$"
                                 duration={1}
                                 separator=""
                                 decimals={5}
                                 decimal=","
                                 delay={2}
                        ></CountUp>
                    </div>
                </Col>
                <Col lg={3} className="stats-row-list d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center text-center">
                        <p className="text-white stats-number-upper">Validator nodes</p>
                        <CountUp className="text-white fw-bold stats-number-text"
                                 start={0}
                                 end={1420}
                                 duration={1}
                                 separator=","
                                 delay={2}
                        ></CountUp>
                    </div>
                </Col>
            </Row>
            <Container fluid className="my-5 py-5">
                <Row className="mx-5 px-5 my-5 py-5" data-aos="fade-up">
                    <StatsRowComponent />
                    <StatsRowComponent />
                </Row>
            </Container>
        </section>
    )
}
