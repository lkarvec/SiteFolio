import React from 'react';
import Project from '../../../components/Project/Project';
import { Github } from 'react-bootstrap-icons';

/*
 */

const Portfolio = ({ backgroundColor, side }) => {
    return (
        <>
            <Project
                side={side}
                backgroundColor={backgroundColor}
                techStack={['React', 'Typescript', 'NextJS', 'Bootstrap', 'SCSS', 'Figma']}
                title="Portfolio"
                icons={[{ svg: <Github height={30} width={30} />, label: 'Github', link: 'https://github.com/lkarvec/SiteFolio' }]}
            >
                If you were wondering how this site was made, the code is open-source in my Github. Feel free to drop an email to ask
                questions.
            </Project>
        </>
    );
};

export default Portfolio;
