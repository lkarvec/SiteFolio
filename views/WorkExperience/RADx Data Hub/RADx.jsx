import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ImageFlip from '../../../components/Images/ImageFlip/ImageFlip';
import classes from './RADx.module.scss';
import Card from '../../../components/Card/Card';
import RADxHelpfulInfo from '../../../public/RADxHelpfulInfo.png';
import RADxHome from '../../../public/RADxHome.png';
import RADxStudyExplorer from '../../../public/RADxStudyExplorer.png';
import RADxStudyReg from '../../../public/RADxStudyReg.png';

/*
 */

const RADx = () => {
    return (
        <>
            <Container className={classes.Container}>
                <Row className="mt-4 mb-4">
                    <Col md={12} lg={{ span: 4 }}>
                        <h2>National Institute of Health</h2>
                        <h3>Senior Software Engineer</h3>
                        <h4>March 2023 - March 2024</h4>
                    </Col>

                    <Col md={12} lg={{ offset: 1, span: 6 }}>
                        <Card>
                            Leon played a pivotal role in guiding and mentoring junior developers, fostering growth within the team. As a
                            subject matter expert, his proficiency in key domains led to innovative and efficient solutions for the complex
                            development problems we faced as part of the RADx program. His intuitive feedback on user experience ensured our
                            products exceeded client expectations.
                            <ul>
                                -{' '}
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samuel-waddell3/">
                                    Samuel Waddell
                                </a>
                                , Business Analyst
                            </ul>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <p>
                            Moving away from Fedmall,{' '}
                            <a target="_blank" rel="noreferrer" href="https://www.boozallen.com/">
                                Booz Allen Hamilton
                            </a>{' '}
                            quickly picked me up to work on their{' '}
                            <a target="_blank" rel="noreferrer" href="https://radxdatahub.nih.gov/">
                                RADx Data Hub
                            </a>
                            &apos;s 3.0 modernization efforts to lead the frontend team, and I was tasked to quickly set up and deploy the
                            scaffolding for the new website repository. Being familiar with it&apos;s ease of use in maintainability, I
                            chose Next.js for the framework and got to work.
                        </p>{' '}
                        <p>
                            I worked very closely with the Tech Lead{' '}
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nileshjmistry/">
                                Nilesh Mistry
                            </a>{' '}
                            and the Business Analyst{' '}
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samuel-waddell3/">
                                Samuel Waddell
                            </a>{' '}
                            to gather and confirm requirements, manage the full-stack team, and work with our partners: Renaissance
                            Computing Institute at UNC (
                            <a target="_blank" rel="noreferrer" href="https://renci.org/">
                                RENCI
                            </a>
                            ) and{' '}
                            <a target="_blank" rel="noreferrer" href="https://www.stanford.edu/">
                                Stanford University
                            </a>
                            ; to commmunicate designs and functionality of the website.
                        </p>
                        <h4>Experience</h4>
                        <ul>
                            <li>
                                Led the frontend development team on overhauling an NIH website, with JavaScript, ReactJS, Redux, Bootstrap,
                                AXIOS, webpack, and NextJS; while attending to WCAG 2.0 requirements and other NIH policies.
                            </li>
                            <li>Assisted UI Designers by refining Figma and LucidSpark whiteboards for low and mid fidelity wireframes.</li>
                            <li>
                                Developed the Study Explorer, Metrics, and Study Registration Pages; as well as the in-house React and
                                Bootstrap component library with Storybook to enforce design language consistency and stability within the
                                website, as well as provide automated 508 testing at the component level.
                            </li>
                            <li>
                                Architected solutions for both frontend and backend integrations at both high and low levels, and utilized
                                Test Driven Development principles to drive development with Jest for Unit Testing.
                            </li>
                            <li>
                                Implemented changes to Standard Operational Procedures for project planning to solve blockers in the
                                Software Development Life Cycle, initialized coding and documentation standards, and testing and peer review
                                processes.
                            </li>
                            <li>
                                Situated cross-training processes across the front-end team to reduce bottleneck knowledge gaps in the
                                system design.
                            </li>
                        </ul>
                    </Col>
                    <Col lg={5}>
                        <div className="flipImage">
                            <ImageFlip
                                backPic={RADxHome}
                                frontPic={RADxHelpfulInfo}
                                backAlt="Picture of the RADx Data Hub Homepage"
                                frontAlt="Picture of the Helpful Information Screen for the RADx Data Hub"
                            />
                            <ImageFlip
                                backPic={RADxStudyExplorer}
                                frontPic={RADxStudyReg}
                                backAlt="Picture of the RADx Data Hub Study Explorer"
                                frontAlt="Picture of the RADx Study Registration form"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default RADx;
