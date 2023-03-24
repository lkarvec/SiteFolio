import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImageFlip from '../../components/Images/ImageFlip/ImageFlip';
import links from '../../constants/imageUrls.module.scss';
import classes from './BMV.module.scss';

/*
 */

const BMV = (props) => {
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
                        <li>
                            Managed a team of 5 other programmers and released a Teacher Mentoring Site with JavaScript, React, Jest, and
                            Node.js.
                        </li>
                        <li>Built a SQL database and data-driven questionnaire to match users to mentors for an effortless experience. </li>
                        <li>Created user testing studies and UI/UX design research, and adjusted the website based on user feedback.</li>
                    </Col>
                    <Col className="mb-4">
                        <ImageFlip backPic={links.BMV1} frontPic={links.BMV2} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

BMV.propTypes = {};

export default BMV;
