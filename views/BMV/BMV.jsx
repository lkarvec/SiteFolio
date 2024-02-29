import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ImageFlip from '../../components/Images/ImageFlip/ImageFlip';
import links from '../../constants/imageUrls.module.scss';
import classes from './BMV.module.scss';

/*
 */

const BMV = () => {
    return (
        <>
            <Container className={classes.Container}>
                <Row className="mt-4 mb-4">
                    <Col lg={2}>
                        <img src={'./BMVLogo.png'} className={classes.BMVLogo} />
                    </Col>
                    <Col lg={{ span: 5 }}>
                        <h2>BMyVillage</h2>
                        <h3>Senior Software Developer</h3>
                        <h4>January 2021 - May 2021</h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <p>
                            During my last semester at UTSA, I worked with Belinda Medellin to enhance her Teacher Mentoring website with a
                            BetterHelp-like inspired questionnaire to on-board new customers to her platform, as well as a complete website
                            redesign to complete the preferred customer experience.
                        </p>
                        <h4>Experience</h4>
                        <li>
                            Contracted to manage a team of 5 other programmers and released a Teacher Mentoring web application with
                            JavaScript, React, Jest, and Node.js.
                        </li>
                        <li>
                            Created high and low fidelity wireframes in Figma to pinpoint and refine design painpoints from stakeholders.
                        </li>
                        <li>Built a SQL database and data-driven questionnaire to match users to mentors for an effortless experience.</li>
                        <li>
                            Conducted User Interface testing and UX research, and adjusted the website based on user and stakeholder
                            feedback.
                        </li>
                    </Col>
                    <Col className="mb-4">
                        <ImageFlip backPic={links.BMV1} frontPic={links.BMV2} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BMV;
