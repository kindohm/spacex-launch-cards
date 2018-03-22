import React from 'react';
import PropTypes from 'prop-types';

const LaunchListItem = ({ flightNumber, missionPatchUrl, selectLaunch }) => (

    <div className="hoverable" style={{ cursor: 'pointer' }} onClick={selectLaunch.bind(this, flightNumber)}>
        <div className='card horizontal' style={{ height: '80px' }}>
            <div className='card-image valign-wrapper hide-on-small-only'>
                <img src={missionPatchUrl} alt={flightNumber} style={{ margin: '10px', maxWidth: '50px', maxHeight: '80px' }} />
            </div>
            <div className='card-stacked'>
                <div className='card-content valign-wrapper'>
                    <p>Flight #{flightNumber}</p>
                </div>
            </div>
        </div>
    </div>
);

LaunchListItem.propTypes= {
    flightNumber: PropTypes.string,
    missionPatchUrl: PropTypes.string,
    selectLaunch: PropTypes.func
};

export { LaunchListItem };