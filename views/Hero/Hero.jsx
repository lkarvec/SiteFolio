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
                            <h2>My name is Alexander Mains</h2>
                        </Row>
                        <Row>
                            <h4>
                                I&apos;m a recognized leader in website Software Engineering; delivering website overhauls and modernization
                                projects with expertise in the React ecosystem, including Typescript, NextJS, AWS, and more.
                            </h4>
                            <h4 style={{ maxWidth: '1100px' }}>
                                I am currently on the market for new roles, as my current contract is finishing at the end of March 2024.
                            </h4>
                            <h4>
                                Feel free to send me an email or a message on LinkedIn about new opportunities for React Web Development.
                            </h4>
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
