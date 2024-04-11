import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import classes from './About.module.scss';
import Card from '../../components/Card/Card';
import scrollReveal from '../../lib/sr';
import Image from 'next/image';

const { sr, srConfig } = scrollReveal;
/*
 */

const About = ({ backgroundColor }) => {
    const revealContainer = useRef(null);

    useEffect(() => {
        sr?.reveal(revealContainer.current, srConfig());
    }, []);
    return (
        <>
            <div className={classes.intro} ref={revealContainer}>
                <Card type="About" accentColor={backgroundColor}>
                    <div>
                        <Row>
                            <Col>
                                <span className={classes.aboutHeader}>Meet the Dev!</span>
                                <p className="mt-3">
                                    I&apos;ve been working in Software Engineering since 2015 while I was attending{' '}
                                    <a href="https://www.heidelberg.edu/" target="_blank" rel="noreferrer">
                                        Heidelberg University
                                    </a>{' '}
                                    in my small hometown of{' '}
                                    <a href="https://www.tiffinohio.gov/" target="_blank" rel="noreferrer">
                                        Tiffin, Ohio
                                    </a>
                                    ; first starting with full-stack retail software in Python 2.7. I&apos;ve always preferred these much
                                    more readable scripting languages like Python and Javascript for their maintainability and ease of use.
                                </p>
                                <p>
                                    Eventually I transferred to University of Texas at San Antonio and graduated in 2021. All through this
                                    time, I worked on whole websites from the ground up, including Livestreamer Websites, Teacher Mentoring
                                    services, and even assisted USAF modernization projects with High Altitude EMP Calculation.
                                </p>
                                <p>
                                    Recently I&apos;ve been in the space of federal contracting with companies like Booz Allen Hamilton, and
                                    have worked on DLA&apos;s large scale e-commerce sites and some of NIH&apos;s research repository sites.
                                    My biggest obsession on these sites was ensuring they maintained accessiblility for all users, not just
                                    abled bodied ones; while still holding a clean design the clients appreciated.
                                </p>
                                <p>Here&apos;s some of the tech I&apos;ve used in the last 9 years of experience:</p>

                                <ul className={classes.list}>
                                    <li>Javascript</li>
                                    <li>Typescript</li>
                                    <li>React</li>
                                    <li>Bootstrap</li>
                                    <li>SCSS/CSS5</li>
                                    <li>Next.js</li>
                                    <li>Node.js</li>
                                    <li>Jest</li>
                                    <li>Cypress</li>
                                    <li>Selenium</li>
                                    <li>Storybook</li>
                                    <li>Figma</li>
                                    <li>Python</li>
                                    <li>AWS</li>
                                    <li>Google Analytics</li>
                                </ul>
                            </Col>
                            <Col lg={4} className={classes.centeredImage}>
                                <div className={classes.imageBackdrop}>
                                    <Image
                                        alt="Headshot picture of Alexander Mains"
                                        src="/headshotpfp.png"
                                        height={280}
                                        width={310}
                                        className="bounceGeneral"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default About;
