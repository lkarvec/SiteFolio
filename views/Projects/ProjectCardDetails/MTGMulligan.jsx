import React from 'react';
import Project from '../../../components/Project/Project';
import { Github } from 'react-bootstrap-icons';

/*
 */

const MTGMulligan = ({ backgroundColor, side }) => {
    return (
        <>
            <Project
                side={side}
                backgroundColor={backgroundColor}
                techStack={['Python']}
                title="MTG Mulligan Optimizer"
                icons={[{ svg: <Github height={30} width={30} />, label: 'Github', link: 'https://github.com/lkarvec/MTGMulligan' }]}
            >
                A framework for comparing winrates against decks and viewing the most optimal hands your deck can open with and provides
                winrate data on mulligan optimization. Original project forked from the Open-MTG simulator by Hylnur.
            </Project>
        </>
    );
};

export default MTGMulligan;
