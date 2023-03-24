import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ImageFlip from '../../components/Images/ImageFlip/ImageFlip';
import links from '../../constants/imageUrls.module.scss';
import classes from './FedMall.module.scss';

/*
 */

const FedMall = (props) => {
    return (
        <>
            <Container className={classes.Container}>
                <Row className="mt-4 mb-3">
                    <Col lg={1}>
                        <img src={'./DLALogo.png'} className={classes.DLALogo} />
                    </Col>
                    <Col lg={{ span: 5 }}>
                        <h2>Defense Logistics Agency</h2>
                        <h3>Senior Software Developer</h3>
                        <h4>December 2021 - January 2023</h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <li>
                            Modernized the account section of FedMall Commerce, including Profile, Registration, Payments, and Permissions
                            sections for the Defense Logistics Agency using JavaScript, ReactJS, Bootstrap, AXIOS, NextJS and NodeJS, with
                            Java and Python 3 REST and AWS services, and a GraphQL composition layer to speed up page load times by 70%.
                        </li>
                        <li>
                            Other projects contributed to include Supplier Portal and MDM(FEDS) teams with enhancement and sustainment
                            tickets and the MOES Bulk Upload and DAAS service rewrite to make those services asynchronous.
                        </li>
                        <li>
                            Created AWS lambda pipelines with SQS triggers, S3 buckets, dead letter queues and using an Aurora DB schema for
                            data management for asynchronous headless Python services on large scale Milstrip Order uploading with DAAS.
                        </li>
                        <li>
                            Supported 2 teams with Agile Project Planning utilizing Scrum methodology, Performance Metrics, Standard
                            Operational Procedure changes, split between the Commerce team and the MOES team, in addition to development
                            work.
                        </li>
                        <li>Directly coordinated with the DLA to demo work successfully at the end of every sprint.</li>
                        <li>
                            Traveled to Credence HQ in Chantilly, Virginia upon request from management to assist AWS and API architecture
                            design for contract proposals in August and presented AWS proposals to DLA directly.
                        </li>
                        <li>
                            Identified issues and risks from the porting of data and environments from Credence to PartNet and coordinated
                            with the proper team members to solve them in a timely manner to ensure blockers were resolved quickly.
                        </li>
                        <li>
                            Oversaw Test-Driven Development and deployment security and quality with Jest, Selenium, and SonarQube gates,
                            saving QA 5-7 days every sprint so ARIA testing can be completed, a previously neglected disability compliance.
                        </li>

                        <li>
                            Developed the in-house React and Bootstrap component library with Storybook to enforce consistency across the
                            other FedMall modernization projects and allow for front end testing and development of new components and
                            factories.
                        </li>
                        <li>
                            Led the efforts of 508 Compliance for disabled users by creating new QA policies used by DLA in User Testing.
                        </li>
                    </Col>
                    <Col>
                        <Row className="mt-5 mb-5">
                            <ImageFlip backPic={links.Fed1} frontPic={links.Fed2} />
                        </Row>
                        <Row className="mt-4">
                            <ImageFlip backPic={links.Fed3} frontPic={links.Fed4} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

FedMall.propTypes = {};

export default FedMall;
