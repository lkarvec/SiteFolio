import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ImageFlip from '../../components/Images/ImageFlip/ImageFlip';
import links from '../../constants/imageUrls.module.scss';
import classes from './RADx.module.scss';
import NIHLogo from '../../components/Images/svgs/NIHLogo';

/*
 */

const RADx = () => {
    return (
        <>
            <Container className={classes.Container}>
                <Row className="mt-4 mb-3">
                    <Col lg={1}>
                        <NIHLogo />
                    </Col>
                    <Col lg={{ span: 5 }}>
                        <h2>National Institute of Health</h2>
                        <h3>Senior Software Engineer</h3>
                        <h4>March 2023 - March 2024</h4>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col lg={8}>
                        <p>
                            Moving away from Fedmall, <a href="https://www.boozallen.com/">Booz Allen Hamilton</a> quickly picked me up to
                            work on their RADx Data Hub&apos;s 3.0 modernization efforts to lead the frontend team, and I was tasked to
                            quickly set up and deploy the scaffolding for the new website repository. Being familiar with it&apos;s ease of
                            use in maintainability, I chose Next.js for the framework and got to work.
                        </p>{' '}
                        <p>
                            I worked very closely with the Tech Lead <a href="https://www.linkedin.com/in/nileshjmistry/">Nilesh Mistry</a>{' '}
                            and the Business Analyst <a href="https://www.linkedin.com/in/samuel-waddell3/">Samuel Waddell</a> to gather and
                            confirm requirements, manage the full-stack team, and work with our partners: Renaissance Computing Institute at
                            UNC (<a href="https://renci.org/">RENCI</a>) and <a href="https://www.stanford.edu/">Stanford University</a>; to
                            commmunicate designs and functionality of the website.
                        </p>
                        <h4>Experience</h4>
                        <li>
                            Led the frontend development team on overhauling an NIH website, with JavaScript, ReactJS, Redux, Bootstrap,
                            AXIOS, webpack, and NextJS; while attending to WCAG 2.0 requirements and other NIH policies.
                        </li>
                        <li>Assisted UI Designers by refining Figma and LucidSpark whiteboards for low and mid fidelity wireframes.</li>
                        <li>
                            Developed the Study Explorer, Metrics, and Study Registration Pages; as well as the in-house React and Bootstrap
                            component library with Storybook to enforce design language consistency and stability within the website, as
                            well as provide automated 508 testing at the component level.
                        </li>
                        <li>
                            Architected solutions for both frontend and backend integrations at both high and low levels, and utilized Test
                            Driven Development principles to drive development with Jest for Unit Testing.
                        </li>
                        <li>
                            Implemented changes to Standard Operational Procedures for project planning to solve blockers in the Software
                            Development Life Cycle, initialized coding and documentation standards, and testing and peer review processes.
                        </li>
                        <li>
                            Situated cross-training processes across the front-end team to reduce bottleneck knowledge gaps in the system
                            design.
                        </li>
                    </Col>
                    <Col>
                        <Row className="mt-5 mb-5">
                            <ImageFlip backPic={links.RADxHome} frontPic={links.RADxHelpfulInfo} />
                        </Row>
                        <Row className="mt-4">
                            <ImageFlip backPic={links.RADxStudyExplorer} frontPic={links.Fed4} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default RADx;
