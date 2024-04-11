import React, { useEffect, useRef } from 'react';
import classes from './Projects.module.scss';
import scrollReveal from '../../lib/sr';
import Card from '../../components/Card/Card';
import NaviTrack from './ProjectCardDetails/NaviTrack';
import OOTMM from './ProjectCardDetails/OOTMM';
import MTGMulligan from './ProjectCardDetails/MTGMulligan';
import Portfolio from './ProjectCardDetails/Portfolio';

const { sr, srConfig } = scrollReveal;
/*
 */

const Projects = ({ backgroundColor }) => {
    const revealContainer = useRef(null);

    useEffect(() => {
        sr?.reveal(revealContainer.current, srConfig());
    }, []);
    return (
        <>
            <div className={classes.container} ref={revealContainer}>
                <Card type="Projects" accentColor={backgroundColor}>
                    <h2>Projects</h2>
                    <ul className={classes.list}>
                        <NaviTrack side="right" />
                        <OOTMM side="left" />
                        <MTGMulligan side="right" />
                        <Portfolio side="left" />
                    </ul>
                </Card>
            </div>
        </>
    );
};

export default Projects;
