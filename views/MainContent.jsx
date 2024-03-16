import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classes from './MainContent.module.scss';
import Hero from './Hero/Hero';
import dynamic from 'next/dynamic';
import SocialButtons from '../components/SocialButtons/SocialButtons';

const WorkExpCard = dynamic(() => import('./WorkExperience/WorkExpCard/WorkExpCard'), {
    ssr: false,
});

/*
 */

const MainContent = (props) => {
    const { backgroundColor } = props;

    return (
        <>
            <Container className={classes.Container}>
                <Hero />
            </Container>
            <div className={classes.socials}>
                <SocialButtons />
            </div>
            <Container className={classes.Container}>
                <WorkExpCard backgroundColor={backgroundColor} />
            </Container>
        </>
    );
};

MainContent.propTypes = {
    backgroundColor: PropTypes.string,
};

export default MainContent;
