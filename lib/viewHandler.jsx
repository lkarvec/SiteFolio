import React from 'react';
import PropTypes from 'prop-types';
import Booksmarts from '../views/WorkExperience/Booksmarts/Booksmarts';
import FedMall from '../views/WorkExperience/FedMall/FedMall';
import FTT from '../views/WorkExperience/FTT/FTT';
import TAP from '../views/WorkExperience/TAP/TAP';
import LGC from '../views/WorkExperience/LGC/LGC';
import BMV from '../views/WorkExperience/BMV/BMV';
import RADx from '../views/WorkExperience/RADx Data Hub/RADx';

/*
 */

const ViewHandler = (props) => {
    const { state } = props;

    switch (state) {
        case 'NIH':
            return (
                <>
                    <RADx />
                </>
            );
        case 'DLA':
            return (
                <>
                    <FedMall />
                </>
            );
        case 'Louisiana Grid Coalition':
            return (
                <>
                    <LGC />
                </>
            );
        case 'BMyVillage':
            return (
                <>
                    <BMV />
                </>
            );
        case 'Booksmarts':
            return (
                <>
                    <Booksmarts />
                </>
            );

        case 'Tiffin Airsoft and Paintball':
            return (
                <>
                    <TAP />
                </>
            );
        case 'Feytouched Tech':
            return (
                <>
                    <FTT />
                </>
            );
    }
};

ViewHandler.propTypes = {
    state: PropTypes.string.isRequired,
};

export default ViewHandler;
