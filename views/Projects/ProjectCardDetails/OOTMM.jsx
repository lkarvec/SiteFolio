import React from 'react';
import Project from '../../../components/Project/Project';
import { BoxArrowUpRight, Discord, Github } from 'react-bootstrap-icons';
import FigmaIcon from '../../../components/Images/svgs/Figma';

/*
 */

const OOTMM = ({ backgroundColor, side }) => {
    return (
        <>
            <Project
                side={side}
                backgroundColor={backgroundColor}
                techStack={['React', 'Typescript', 'Assembly', 'C', 'Bootstrap', 'SCSS', 'Figma']}
                title="OOTMM Randomizer"
                icons={[
                    { svg: <Github height={30} width={30} />, label: 'Github', link: 'https://github.com/OoTMM/OoTMM' },
                    {
                        svg: <FigmaIcon />,
                        label: 'Figma',
                        link: 'https://www.figma.com/file/RDvZ37qbBhjbdsyyOW7O2E/Untitled?type=design&node-id=0%3A1&mode=design&t=kwhTk87uLXd1j5i1-1',
                    },
                    {
                        svg: <Discord height={30} width={30} />,
                        label: 'Discord',
                        link: 'https://discord.gg/4QdtPBP6wf',
                    },
                    {
                        svg: <BoxArrowUpRight height={23} width={23} />,
                        label: 'Go to Site',
                        link: 'https://ootmm.com/',
                    },
                ]}
                imageLink="/OOTMM.png"
            >
                A randomizer mod that combines both Ocarina of Time and Majora&apos;s Mask into a single game. I&apos;m currently working on
                making the site responsive and redesigning certain sections to be more accessible to beginners.
            </Project>
        </>
    );
};

export default OOTMM;
