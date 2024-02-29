import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './FTT.module.scss';

/*
 */

const FTT = () => {
    return (
        <>
            <Container className={classes.Container}>
                <Row className="mt-4 mb-4">
                    <Col lg={1}>
                        <img src={'./Logo.png'} className={classes.fttLogo} />
                    </Col>
                    <Col lg={{ span: 5 }}>
                        <h2>Feytouched Tech</h2>
                        <h3>Software Developer</h3>
                        <h4>January 2015 - July 2017</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            During my time co-founding Tiffin Airsoft and Paintball with my good buddy Trenton Trevino, I looked for ways to
                            secure more funding for our very early stage start-up before I moved over to San Antonio for school.
                        </p>
                        <p>
                            My immediate thought was to repurpose our Point-of-Service retail product as a one time purchase license model
                            for local businesses in Tiffin. I gathered 6 interested businesses and proceeded to add in additional custom
                            content into their software on client request.
                        </p>
                        <h4>Experience</h4>
                        <li>
                            Designed and created a Full-Stack Python Retail PoS product with Microsoft Access, SQL Server for relational
                            database administration with features like Inventory Management, Checkout, Tax Report Management, and a Loyalty
                            System.
                        </li>
                        <li>
                            Maintained and sold the point-of-service solution to other businesses in the area as a cheaper alternative to
                            help the business secure $15,000 (DBA Feytouched Tech) in additional funding in its start-up phase.
                        </li>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default FTT;
