import React from 'react';

const LaunchListItem = ({flightNumber, missionPatchUrl, selectLaunch}) => (

    <div className="col s3" onClick={selectLaunch.bind(this, flightNumber)}>
                <div className="card horizontal" style={{height: "80px"}}>
                    <div className="card-image valign-wrapper hide-on-small-only">
                        <img src={missionPatchUrl} alt={flightNumber} style={{margin: "10px", maxWidth: "50px", maxHeight: "80px"}} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content valign-wrapper">
                            <p>Flight #{flightNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
);

export default LaunchListItem;
