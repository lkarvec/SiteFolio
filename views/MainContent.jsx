import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Card from '../components/Card/Card';
import ImageFlip from '../components/Images/ImageFlip/ImageFlip';
import classes from './MainContent.module.scss';
import links from '../constants/imageUrls.module.scss';

/*
 */

const MainContent = (props) => {
    return (
        <>
            <Container className={classes.Container}>
                <Card size="large">
                    <p>Test</p>
                    <ImageFlip backPic={links.book1} frontPic={links.book2} />
                </Card>
            </Container>
        </>
    );
};

MainContent.propTypes = {};

export default MainContent;
