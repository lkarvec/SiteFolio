import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './ImageFlip.module.scss';
import { useSpring, animated } from '@react-spring/web';
//TODO rewrite the jsdocs
/**
 * A visual container for other visual React components.
 * * See https://react-bootstrap.github.io/components/ImageFlips/ for examples and documentation
 * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * @property {String} [title=''] - Title in the header of the ImageFlip
 * @property {Node} children - Contains any element being rendered within the ImageFlip's body
 * @property {String} [size] - Changes the size style to one of our presets 'small', 'medium', 'large', or 'auto' if nothing is passed through
 * @property {Boolean} [selected] - Shows the selected border around the ImageFlip
 * @returns {JSX} A ImageFlip React Component
 */

const ImageFlip = (props) => {
    const { backPic, frontPic } = props;

    const cardStyle = `${classes.c} `;
    const backStyle = cardStyle + backPic;
    const frontStyle = cardStyle + frontPic;

    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    return (
        <div className={classes.container} onClick={() => set((flippedState) => !flippedState)}>
            <animated.div className={backStyle} style={{ opacity: opacity.to((o) => 1 - o), transform, rotateY: '-10deg' }} />
            <animated.div
                className={frontStyle}
                style={{
                    opacity,
                    transform,
                    rotateX: '180deg',
                    rotateY: '10deg',
                }}
            />
        </div>
    );
};

ImageFlip.defaultProps = {};

ImageFlip.propTypes = {
    backPic: PropTypes.string,
    frontPic: PropTypes.string,
    selected: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default ImageFlip;
