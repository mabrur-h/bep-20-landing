import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './trade-stats.styles.css'
import {StatsRowComponent} from "./stats-row/stats-row.component";

export const TradeStatsComponent = () => {
    return (
        <section id="stats">
            <Row>
                <Col className="stats-row-list d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center text-center">
                        <p className="text-white stats-number-upper">Transactions per second</p>
                        <p className="text-white fw-bold stats-number-text">1,223</p>
                    </div>
                </Col>
                <Col className="stats-row-list d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center text-center">
                        <p className="text-white stats-number-upper">Transactions per second</p>
                        <p className="text-white fw-bold stats-number-text">1,306</p>
                    </div>
                </Col>
                <Col className="stats-row-list d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center text-center">
                        <p className="text-white stats-number-upper">Transactions per second</p>
                        <p className="text-white fw-bold stats-number-text">1,306</p>
                    </div>
                </Col>
                <Col className="stats-row-list d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center text-center">
                        <p className="text-white stats-number-upper">Transactions per second</p>
                        <p className="text-white fw-bold stats-number-text">1,306</p>
                    </div>
                </Col>
            </Row>
            <Container fluid className="my-5 py-5">
                <Row className="mx-5 px-5 my-5 py-5">
                    <StatsRowComponent />
                    <StatsRowComponent />
                </Row>
            </Container>
        </section>
    )
}