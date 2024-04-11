import React from 'react';
import Project from '../../../components/Project/Project';
import { Github } from 'react-bootstrap-icons';
import FigmaIcon from '../../../components/Images/svgs/Figma';

/*
 */

const NaviTrack = ({ backgroundColor, side }) => {
    return (
        <>
            <Project
                side={side}
                backgroundColor={backgroundColor}
                techStack={['React', 'Typescript', 'Redux', 'NextJS', 'Bootstrap', 'SCSS', 'Figma']}
                title="NaviTrack"
                icons={[
                    { svg: <Github height={30} width={30} />, label: 'Github', link: 'https://github.com/lkarvec/NaviTrack' },
                    {
                        svg: <FigmaIcon />,
                        label: 'Figma',
                        link: 'https://www.figma.com/file/p7gzg9UawsXvBEn95D22w1/NaviTrack?type=design&node-id=0%3A1&mode=design&t=BX1MASADx1QuZXOw-1',
                    },
                ]}
                imageLink=""
            >
                A sleek, modern solution to Ocarina of Time and Majora&apos;s Mask speedrunning and randomizer documentation and tools for
                streamers. This website will supply item trackers, glitch documentation, and serve as a general purpose application for
                those playing the games and for the developers of randomizers.
            </Project>
        </>
    );
};

export default NaviTrack;
