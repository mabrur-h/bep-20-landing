import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import '../trade-stats.styles.css'
import CountUp from "react-countup";

export const StatsRowComponent = () => {
    return (
        <Col className="trade-stats-list d-flex align-items-center justify-content-center me-5">
            <div className="trade-stats-wrapper w-100">
                <div className="d-flex flex-column align-items-center text-center">
                    <h4 className="text-white stats-number-upper display-5 fw-bold">All-time trade volume</h4>
                    <CountUp className="text-white stats-number-text display-5 mt-5"
                             start={0}
                             end={4200368117}
                             prefix="$"
                             duration={4}
                             separator=","
                             delay={3}
                    ></CountUp>
                </div>
            </div>
        </Col>
    )
}