import React from 'react';
import classes from './SocialButtons.module.scss';
import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';

/**
 * A visual container for Social Media Buttons.
 * @returns {JSX} A Social Media Button Card React Component
 */

const SocialButtons = ({ variant }) => {
    let containerClass = classes.container;
    switch (variant) {
        case 'footer':
            containerClass += ` ${classes.row}`;
            break;
        default:
            containerClass += ` ${classes.column}`;
            break;
    }
    return (
        <div className={containerClass}>
            <a href="https://github.com/lkarvec">
                <Github size={35} title="Go to Github" className={classes.button} />
            </a>
            <a href="https://www.linkedin.com/in/alexander-mains-956b13208/">
                <Linkedin size={35} title="Go to LinkedIn" className={classes.button} />
            </a>
            <a href="mailto:lkarvec@gmail.com">
                <Envelope size={35} title="Send an email to lkarvec@gmail.com" className={classes.button} />
            </a>
        </div>
    );
};

export default SocialButtons;
