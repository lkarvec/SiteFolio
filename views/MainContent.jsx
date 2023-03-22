import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

/*  
*/

const MainContent = (props) => {
    const {
        data
    } = props;

    return (
        <>
            <Col>
                <p>Test</p>
            </Col>

        </>
    );
};

MainContent.propTypes = {
    data: PropTypes.object,
};

export default MainContent;
