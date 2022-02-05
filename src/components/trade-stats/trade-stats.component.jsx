import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './trade-stats.styles.css'

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
                    <Col className="trade-stats-list d-flex align-items-center justify-content-center me-5">
                        <div className="trade-stats-wrapper w-100">
                            <div className="d-flex flex-column align-items-center text-center">
                                <h4 className="text-white stats-number-upper display-5 fw-bold">All-time trade volume</h4>
                                <p className="text-white stats-number-text display-5 mt-5">$3,306,422</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="trade-stats-list d-flex align-items-center justify-content-center ms-5">
                        <div className="trade-stats-wrapper w-100">
                            <div className="d-flex flex-column align-items-center text-center">
                                <h4 className="text-white stats-number-upper display-5 fw-bold">Total Trades</h4>
                                <p className="text-white stats-number-text display-5 mt-5">10,434</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}