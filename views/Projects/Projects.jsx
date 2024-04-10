import React, { useEffect, useRef } from 'react';
import classes from './Projects.module.scss';
import scrollReveal from '../../lib/sr';
import Card from '../../components/Card/Card';
import NaviTrack from './ProjectCardDetails/NaviTrack';

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
                        <NaviTrack side="left" />
                        <NaviTrack />
                    </ul>
                </Card>
            </div>
        </>
    );
};

export default Projects;
