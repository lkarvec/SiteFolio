import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Card from '../components/Card/Card';
import classes from './MainContent.module.scss';
import ViewHandler from 'lib/viewHandler';
import NavigationBar from '../components/NavBarFactory/NavBar/NavBar';

/*
 */

const MainContent = (props) => {
    const [view, setView] = useState('FedMall');
    const NavParams = {
        activeTab: view,
        tabList: ['FedMall', 'Louisiana Grid Coalition', 'BMyVillage', 'Booksmarts', 'Tiffin Airsoft and Paintball', 'Feytouched Tech'],
    };
    return (
        <>
            <Container className={classes.Container}>
                <Card className={classes.Card}>
                    <NavigationBar activeTab={NavParams.activeTab} tabList={NavParams.tabList} setTab={setView} />
                    <ViewHandler state={view} />
                </Card>
            </Container>
        </>
    );
};

MainContent.propTypes = {};

export default MainContent;
