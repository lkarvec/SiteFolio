import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ImageFlip from '../../../components/Images/ImageFlip/ImageFlip';
import links from '../../../constants/imageUrls.module.scss';
import classes from './Booksmarts.module.scss';

/*
 */

const Booksmarts = () => {
    return (
        <>
            <Container className={classes.Container}>
                <Row className="mt-4 mb-3">
                    <Col lg={{ span: 5 }}>
                        <h2>Booksmarts LLC</h2>
                        <h3>Senior Software Developer</h3>
                        <h4>September 2020 - August 2022</h4>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="mb-4">
                    <Col>
                        <p>
                            I&apos;ve always been into the Politics space, even showing up on some podcasts myself. Booksmarts reached out
                            to his community for webdevs that would be interested in working for him on his website. The initial plan was to
                            take the DGG/VGG site design and modernize it with a load of integrated features to connect all three social
                            media communities (Twitch, Youtube, and Discord) into one unified community. I ended up working very closely
                            with{' '}
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tikonelson/">
                                Tiko Nelson
                            </a>{' '}
                            for a majority on the project on design.
                        </p>
                        <h4>Experience</h4>
                        <li>
                            Led a team of developers to capture requirements, design, create, and release a website for the streamer
                            &quot;Booksmarts&quot; which utilized JavaScript, Typescript, and React with Nodejs, Jest, CSS, Bootstrap,
                            Tailwind
                        </li>
                        <li>
                            Built and maintained the React component library and Storybook, so frontend code redundancy was reduced by 40%.
                        </li>
                        <li>
                            Integrated Facebook, Twitter, Twitch, Google, and Discord account authentication to strengthen the security of
                            the site.
                        </li>
                        <li>
                            Implemented multiple stream platforms for the users to view, including YouTube, Twitch, Rumble, and Kick
                            integration.
                        </li>
                        <li>Collaborated with design to create wireframes in Figma for the React component library and site pages.</li>
                    </Col>
                    <Col lg={5}>
                        <div className="flipImage">
                            <ImageFlip backPic={links.book1} frontPic={links.book2} />
                            <ImageFlip backPic={links.bookFigma} frontPic={links.bookScreen} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

Booksmarts.propTypes = {};

export default Booksmarts;
