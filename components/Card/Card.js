import React from 'react';
import PropTypes from 'prop-types';
import { Card as CardComponent } from 'react-bootstrap';
import classes from './Card.module.scss';
import CardAccent from '../Images/svgs/cardAccent';
import Image from 'next/image';

/**
 * A visual container for other visual React components.
 * * See https://react-bootstrap.github.io/components/cards/ for examples and documentation
 * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * @property {String} [title=''] - Title in the header of the Card
 * @property {Node} children - Contains any element being rendered within the Card's body
 * @property {String} [size] - Changes the size style to one of our presets 'small', 'medium', 'large', or 'auto' if nothing is passed through
 * @property {Boolean} [selected] - Shows the selected border around the Card
 * @returns {JSX} A Card React Component
 */

const Card = (props) => {
    const { title, secondaryTitle, children, size, selected, accent, accentColor, type, cardImage, image } = props;

    let cardClass = classes.card;
    let cardBody = classes.cardBody;
    cardClass += selected ? ` ${classes.selected}` : '';

    switch (size) {
        case 'small':
            cardClass += ` ${classes.small}`;
            break;
        case 'medium':
            cardClass += ` ${classes.medium}`;
            break;
        case 'large':
            cardClass += ` ${classes.large}`;
            break;
        default:
            cardClass += ` ${classes.auto}`;
            break;
    }

    switch (type) {
        case 'Hero':
            cardClass += ` ${classes.Hero} fadeIn`;
            break;
        case 'About':
            cardBody += ` ${classes.About}`;
            break;
        case 'Projects':
            cardBody += ` ${classes.Projects}`;
            break;
        default:
            break;
    }

    return (
        <CardComponent className={cardClass}>
            <CardComponent.Img variant="top" src="" />
            <div className={classes.moveRight}>
                <div className={classes.accent}>
                    {(type !== 'Hero' && <CardAccent color={accentColor} />) || (
                        <Image src="/LogoAlpha.png" width="75px" height="73px" style={{ opacity: 0.7 }} />
                    )}
                </div>
            </div>
            {image && <Image className={cardImage} src={image.src} height={image.height} width={image.width} alt={image.alt} />}

            {title && <CardComponent.Header className={classes.cardHeader}>{title}</CardComponent.Header>}
            {secondaryTitle && <CardComponent.Title className={classes.cardHeader}>{title}</CardComponent.Title>}
            <CardComponent.Body className={cardBody}>{children}</CardComponent.Body>
        </CardComponent>
    );
};

Card.propTypes = {
    children: PropTypes.any.isRequired,
    selected: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    title: PropTypes.string,
};

export default Card;
