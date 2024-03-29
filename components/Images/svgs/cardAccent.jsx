/* eslint-disable max-len */
import classes from './svgAnimations.module.scss';
import React from 'react';

/**
 * NOTE: The className for every <path> is a randomized animation.
 * There are enough breakpoints in the animations to make it appear completely random to a user not really paying attention.
 * @param {String} color - This is the changing color of the SVG fill.  It flips on a timer.
 * @returns Animated Diamond Accent for cards
 */
const CardAccent = ({ color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="451" height="883" viewBox="0 0 411 883" fill="none">
            <path
                className={classes.diamond1}
                d="M259.722 797.778C264.018 793.482 270.982 793.482 275.278 797.778L332.222 854.722C336.518 859.018 336.518 865.982 332.222 870.278L275.278 927.222C270.982 931.518 264.018 931.518 259.722 927.222L202.778 870.278C198.482 865.982 198.482 859.018 202.778 854.722L259.722 797.778Z"
                fill={color}
                fillOpacity="0.5"
            />
            <path
                className={classes.diamond2}
                d="M383.722 7.77817C388.018 3.48241 394.982 3.48241 399.278 7.77817L456.222 64.7218C460.518 69.0176 460.518 75.9824 456.222 80.2782L399.278 137.222C394.982 141.518 388.018 141.518 383.722 137.222L326.778 80.2782C322.482 75.9824 322.482 69.0176 326.778 64.7218L383.722 7.77817Z"
                fill={color}
                fillOpacity="0.5"
            />
            <path
                className={classes.diamond3}
                d="M97.2218 651.778C101.518 647.482 108.482 647.482 112.778 651.778L202.222 741.222C206.518 745.518 206.518 752.482 202.222 756.778L112.778 846.222C108.482 850.518 101.518 850.518 97.2218 846.222L7.77819 756.778C3.48242 752.482 3.48241 745.518 7.77817 741.222L97.2218 651.778Z"
                fill={color}
                fillOpacity="0.5"
            />
            <path
                className={classes.diamond4}
                d="M281.222 155.778C285.518 151.482 292.482 151.482 296.778 155.778L386.222 245.222C390.518 249.518 390.518 256.482 386.222 260.778L296.778 350.222C292.482 354.518 285.518 354.518 281.222 350.222L191.778 260.778C187.482 256.482 187.482 249.518 191.778 245.222L281.222 155.778Z"
                fill={color}
                fillOpacity="0.5"
            />
            <path
                className={classes.diamond5}
                d="M354.722 397.778C359.018 393.482 365.982 393.482 370.278 397.778L556.222 583.722C560.518 588.018 560.518 594.982 556.222 599.278L370.278 785.222C365.982 789.518 359.018 789.518 354.722 785.222L168.778 599.278C164.482 594.982 164.482 588.018 168.778 583.722L354.722 397.778Z"
                fill={color}
                fillOpacity="0.5"
            />
        </svg>
    );
};

export default CardAccent;
