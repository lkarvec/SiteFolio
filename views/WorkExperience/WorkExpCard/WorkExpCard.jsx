import React, { useEffect, useRef, useState } from 'react';
import classes from './WorkExpCard.module.scss';
import Card from '../../../components/Card/Card';
import NavigationBar from '../../../components/NavBarFactory/NavBar/NavBar';
import ViewHandler from '../../../lib/viewHandler';
import scrollReveal from '../../../lib/sr';

const { sr, srConfig } = scrollReveal;
/*
 */

const WorkExpCard = ({ backgroundColor }) => {
    const [view, setView] = useState('NIH');
    const revealContainer = useRef(null);
    const NavParams = {
        activeTab: view,
        tabList: ['NIH', 'DLA', 'Louisiana Grid Coalition', 'BMyVillage', 'Booksmarts', 'Tiffin Airsoft and Paintball', 'Feytouched Tech'],
    };
    useEffect(() => {
        sr?.reveal(revealContainer.current, srConfig());
    }, []);
    return (
        <>
            <div ref={revealContainer}>
                <Card className={classes.Card} accentColor={backgroundColor} title="Experience">
                    <NavigationBar activeTab={NavParams.activeTab} tabList={NavParams.tabList} setTab={setView} />
                    <ViewHandler state={view} />
                </Card>
            </div>
        </>
    );
};

export default WorkExpCard;
