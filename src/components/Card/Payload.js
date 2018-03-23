import React from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

const PayloadList = ({ launch }) => {
    const rocket = launch.rocket;
    const secondStage = rocket.second_stage;
    const payloads = secondStage ? secondStage.payloads : null;
    let count = 0;
    return _.map(payloads, payload => {
        count++;
        const customers = payload.customers.join(', ');
        const mass = payload.payload_mass_kg ? `${payload.payload_mass_kg}kg` : 'n/a';
        return <Payload
            id={payload.payload_id}
            count={count} 
            type={payload.payload_type} 
            mass={mass} 
            orbit={payload.orbit} 
            customers={customers} />;
    });
};

PayloadList.propTypes = {
    launch: PropTypes.arrayOf(PropTypes.object)
};

const Payload = ({ id, count, type, mass, orbit, customers }) => (

    <div className="col s6" key={id}>
        <div className="card blue-grey darken-3 white-text">
            <div className="card-content">
                <span className="card-title blue-grey-text text-lighten-3">Payload {count}</span>
                <ul>
                    <li className="collection-item">Type: {type}</li>
                    <li className="collection-item">Mass: {mass}</li>
                    <li className="collection-item">Orbit: {orbit}</li>
                    <li className="collection-item">Customers: {customers}</li>
                </ul>
            </div>
        </div>
    </div>
);

Payload.propTypes = {
    id: PropTypes.string,
    count: PropTypes.number,
    type: PropTypes.string,
    mass: PropTypes.string,
    orbit: PropTypes.string,
    customers: PropTypes.string
};

export { PayloadList };