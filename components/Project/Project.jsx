import React, { useEffect, useRef } from 'react';
import classes from './Project.module.scss';
import scrollReveal from '../../lib/sr';
import Image from 'next/image';

const { sr, srConfig } = scrollReveal;
/*
 */

const Project = (props) => {
    const { techStack, children, title, icons, imageLink, side } = props;

    const techStackArray = techStack.map((tech, index) => {
        return <li key={`tech-${index}`}>{tech}</li>;
    });

    const iconArray = icons.map((icon, index) => {
        return (
            <li key={`icon-${index}`}>
                <a href={icon.link}>{icon.svg}</a>
            </li>
        );
    });

    const revealContainer = useRef(null);

    useEffect(() => {
        sr?.reveal(revealContainer.current, srConfig());
    }, []);
    return (
        <>
            <div
                className={`${classes.projectContainer} ${side === 'left' ? classes.leftContainer : classes.rightContainer}`}
                ref={revealContainer}
            >
                <div className={classes.detailsContainer}>
                    <h2>{title}</h2>
                    <div className={classes.description}>
                        <span>{children}</span>
                    </div>
                    <ul className={classes.grid}>{techStackArray}</ul>
                    <ul className={classes.grid}>{iconArray}</ul>
                </div>
                <div className={classes.imageContainer}>
                    <Image src={imageLink} layout="fill" />
                </div>
            </div>
        </>
    );
};

export default Project;
