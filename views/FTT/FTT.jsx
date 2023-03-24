import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import ImageFlip from '../../components/Images/ImageFlip/ImageFlip';
import links from '../../constants/imageUrls.module.scss';
import classes from './FTT.module.scss';

/*
 */

const FTT = (props) => {
    return (
        <>
            <Container className={classes.Container}>
                <Row>
                    <li></li>
                </Row>
                <Row>
                    <ImageFlip backPic={links.book1} frontPic={links.book2} />
                </Row>
            </Container>
        </>
    );
};

FTT.propTypes = {};

export default FTT;
