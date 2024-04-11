import React from 'react';
import { Row } from 'react-bootstrap';
import classes from './Hero.module.scss';
import Card from '../../components/Card/Card';
import SocialButtons from '../../components/SocialButtons/SocialButtons';

/*
 */

const Hero = () => {
    return (
        <>
            <div className={classes.intro}>
                <Card type="Hero">
                    <div>
                        <Row>
                            <h1>Welcome to Feytouched Tech</h1>
                        </Row>
                        <Row className="mb-3">
                            <h2>My name is Alexander Mains.</h2>
                        </Row>
                        <Row>
                            <p>
                                I&apos;m a recognized leader in website Software Engineering; delivering website overhauls and modernization
                                projects with expertise in the React ecosystem, including Typescript, NextJS, AWS, and more.
                            </p>
                            <p style={{ maxWidth: '1100px' }}>
                                I am currently on the market for new roles, as my current contract is finishing at the end of March 2024.
                            </p>
                            <p>
                                Feel free to send me an email or a message on LinkedIn about new opportunities for React Web Development. If
                                you want to start a website commission, head over to my Ko-fi to start the process.
                            </p>
                        </Row>
                        <Row>
                            <div className={classes.centered}>
                                <SocialButtons variant="footer" />
                            </div>
                        </Row>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default Hero;
