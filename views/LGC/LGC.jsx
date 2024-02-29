import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './LGC.module.scss';

/*
 */

const LGC = () => {
    return (
        <>
            <Container className={classes.Container}>
                <Row className="mt-4 mb-4">
                    <Col lg={1}>
                        <img src={'./LA-Grid-Coalition-logo.png'} className={classes.LGCLogo} />
                    </Col>
                    <Col lg={{ span: 5 }}>
                        <h2>Louisiana Grid Coalition</h2>
                        <h3>Full-Stack Software Engineer</h3>
                        <h4>January 2021 - October 2022</h4>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={8}>
                        <p>
                            For my independent study, I partnered with{' '}
                            <a href="https://www.linkedin.com/in/henry-newton-3161bab/">Henry Newton</a> and{' '}
                            <a href="https://www.linkedin.com/in/mark-robinson-0b38975b/">Dr. Mark Robinson</a> at UTSA to create an
                            Open-Source EMP Calculator website based off of{' '}
                            <a href="http://large.stanford.edu/courses/2019/ph241/rogers1/docs/ad-a009-208.pdf">
                                Louis W. Seiler Jr&apos;s 1975 paper detailing a Fortran program
                            </a>{' '}
                            he created for the United States Air Force Institute of Technology. Soon after, I partnered with the Louisiana
                            Grid Coalition to enhance this website further and work with companies like{' '}
                            <a href="https://www.empshield.com/">EMPShield</a> to get feedback and details for enhancements. I left this
                            project during my Fedmall contract transition to Partnet Inc..
                        </p>

                        <h4>Experience</h4>
                        <li>
                            Created a site for the Louisiana Grid Coalition&apos;s open-source High Altitude EMP calculator built with C++
                            and JavaScript using ReactJS, Nodejs, Jest, CSS, and Canvas deployed in a docker container for nuclear weapons
                            research and data visualization efforts.
                        </li>
                        <li>
                            Aided the Louisiana Grid Coalition to find economic hosting solutions for their service, utilizing their
                            non-profit status effectively in communicating for licenses of operation, which are included in the repository.
                        </li>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LGC;
