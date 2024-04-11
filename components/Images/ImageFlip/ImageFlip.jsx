import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './ImageFlip.module.scss';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';

// TODO rewrite the jsdocs
/**
 * A visual container for other visual React components.
 * * See https://react-bootstrap.github.io/components/ImageFlips/ for examples and documentation
 * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * @returns {JSX} A ImageFlip React Component
 */

const ImageFlip = (props) => {
    const { backPic, frontPic, backAlt, frontAlt } = props;

    const cardStyle = `${classes.c} `;
    const backStyle = cardStyle;
    const frontStyle = cardStyle;

    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    return (
        <div className={classes.container} onClick={() => set((flippedState) => !flippedState)}>
            <animated.div className={backStyle} style={{ opacity: opacity.to((o) => 1 - o), transform, rotateY: '-10deg' }}>
                <Image
                    alt={backAlt}
                    layout="fill"
                    src={backPic}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                />
            </animated.div>
            <animated.div
                className={frontStyle}
                style={{
                    opacity,
                    transform,
                    rotateX: '180deg',
                    rotateY: '10deg',
                }}
            >
                <Image alt={frontAlt} layout="fill" src={frontPic} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </animated.div>
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
