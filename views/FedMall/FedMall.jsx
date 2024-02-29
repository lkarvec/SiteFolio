import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ImageFlip from '../../components/Images/ImageFlip/ImageFlip';
import links from '../../constants/imageUrls.module.scss';
import classes from './FedMall.module.scss';

/*
 */

const FedMall = () => {
    return (
        <>
            <Container className={classes.Container}>
                <Row className="mt-4 mb-3">
                    <Col lg={1}>
                        <img src={'./DLALogo.png'} className={classes.DLALogo} />
                    </Col>
                    <Col lg={{ span: 5 }}>
                        <h2>Defense Logistics Agency</h2>
                        <h3>Senior/Lead Software Engineer</h3>
                        <h4>December 2021 - January 2023</h4>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={8}>
                        <p>
                            My time working on the{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.restricted.fedmall.mil/webapp/wcs/stores/servlet/en/fedmall"
                            >
                                Fedmall
                            </a>{' '}
                            contract for both{' '}
                            <a target="_blank" rel="noreferrer" href="https://credence-llc.com/">
                                Credence Management Solutions
                            </a>{' '}
                            and{' '}
                            <a target="_blank" rel="noreferrer" href="https://partnet.com/">
                                Partnet Inc.
                            </a>{' '}
                            was a fantastic opportunity to step into more scalable enterprise software. My main efforts were to modernize
                            this older site away from it&apos;s JSP heavy architecture into a React and Next.js environment.
                        </p>
                        <p>
                            I quickly advanced to a Lead position, taking over for my previous Lead,{' '}
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mmiller1102/">
                                Michael Miller
                            </a>
                            , as the Lead Software Engineer during the MOES (Material Order Entry System), and my leadership and foresight
                            enabled MOES to be the first project on the contract releasing early without overtime, instead of every other
                            project being late by several months.
                        </p>
                        <p>
                            I continued being the Lead Software Engineer through the Partnet transition, working very closely with our
                            Business Analyst{' '}
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joe-bonilla-b3128765/">
                                Joe Bonilla
                            </a>{' '}
                            and our clients at the Defense Logistics Agency to generate and confirm requirements and software architecture,
                            as well as manage the smooth environment transition during active development during October 2022 with{' '}
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ryan-robinette-33758a53/">
                                Ryan Robinette.
                            </a>
                        </p>
                        <h4>Experience</h4>
                        <li>
                            Modernized the account section of FedMall Commerce for DLA using JavaScript, ReactJS, Redux, Bootstrap, AXIOS,
                            webpack, NextJS and NodeJS, with Java and Python 3 REST and AWS services, and a GraphQL layer to reduce calls by
                            ~95% of their previous size.
                        </li>
                        <li>
                            Created the in-house React component library with Storybook to enforce consistency across FedMall modernization
                            projects and to automate WCAG 2.1 compliance on a Component level.
                        </li>
                        <li>Reduced P99 latency for Orders pages from 22 seconds to 1 second with GraphQL data composition.</li>
                        <li>
                            Created Bulk Upload APIs with asynchronous Python and Java AWS Lambda services, SQS and S3 on big data uploading
                            using an Aurora DB schema for data management.
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
                            Implemented Test-Driven Development practices with Jest and Selenium for test automation, and SonarQube for
                            deployment code quality and security gates, saving QA several days of manual testing every sprint and creating a
                            more maintainable product.
                        </li>
                        <li>
                            Led the efforts of 508 Compliance for disabled users by creating new QA policies used by DLA in User Testing and
                            performing audits for Credence.
                        </li>
                    </Col>
                    <Col>
                        <Row className="mb-5">
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

export default FedMall;
