import React from 'react';
import PropTypes from 'prop-types';
import Booksmarts from 'views/Booksmarts/Booksmarts';
import FedMall from 'views/FedMall/FedMall';
import FTT from 'views/FTT/FTT';
import TAP from 'views/TAP/TAP';
import LGC from 'views/LGC/LGC';
import BMV from 'views/BMV/BMV';

/*
 */

const ViewHandler = (props) => {
    const { state } = props;
    console.log(props);
    switch (state) {
        case 'Booksmarts':
            return (
                <>
                    <Booksmarts />
                </>
            );
        case 'FedMall':
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
        case 'BMyVillage':
            return (
                <>
                    <BMV />
                </>
            );
    }
};

ViewHandler.propTypes = {
    state: PropTypes.string.isRequired,
};

export default ViewHandler;
