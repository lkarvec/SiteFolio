import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './TAP.module.scss';
import links from '../../../constants/imageUrls.module.scss';
import ImageFlip from '../../../components/Images/ImageFlip/ImageFlip';

/*
 */

const TAP = () => {
    return (
        <>
            <Container className={classes.Container}>
                <Row className="mt-4 mb-4">
                    <Col lg={{ span: 5 }}>
                        <h2>Tiffin Airsoft and Paintball</h2>
                        <h3>Software Developer / Co-founder</h3>
                        <h4>January 2015 - July 2017</h4>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="mb-4">
                    <Col>
                        <p>
                            A close friend and I founded a business together in Tiffin, Ohio to hopefully get kids more active and off the
                            streets during the height of the Opioid crisis in Ohio. We ran this business for about a year and a half, and
                            still maintain the community page for Airsoft and Paintball meet-ups all across Northwest Ohio today.
                        </p>

                        <h4>Experience (Software Engineering related)</h4>
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
                    {/*<Col lg={5}>
                        <div className="flipImage">
                            <ImageFlip backPic={links.Tap1} frontPic={links.Tap2} />
    </div>
    </Col>*/}
                </Row>
            </Container>
        </>
    );
};

export default TAP;
