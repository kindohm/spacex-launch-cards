import React, { Component } from "react";
import { connect } from 'react-redux'
import * as _ from 'lodash';
import moment from 'moment';

class Card extends Component {

    render() {
        const launch = this.props.launch;
        const rocket = launch.rocket;
        const secondStage = rocket.second_stage;
        const payloads = secondStage ? secondStage.payloads : null;
        const date = moment(launch.launch_date_utc).format('LLL');

        const payloadElements = _.map(payloads, payload => {
            const customers = payload.customers.join(', ');
            const mass = payload.payload_mass_kg ? `${payload.payload_mass_kg}kg` : 'n/a';
            return <div className="col s6"> <ul className="" key={payload.payload_id}>
                <li className="collection-item">Type: {payload.payload_type}</li>
                <li className="collection-item">Mass: {mass}</li>
                <li className="collection-item">Orbit: {payload.orbit}</li>
                <li className="collection-item">Customers: {customers}</li>
            </ul></div>
        });

        return <div className="row">
            <div className="col s4">
                <img style={{ maxWidth: '100%', maxHeight: '400px' }} alt={launch.flight_number} src={launch.links.mission_patch} />
            </div>
            <div className="col s8">

                <h3>Flight #{launch.flight_number}</h3>
                <p>{date}</p>
                <div className="col s12">
                    <p className="">{launch.details}</p>
                </div>

                <hr />

                <div className="col s12">
                    <ul className="">
                        <li className="collection-item"><strong>Launch Site:</strong> {launch.launch_site.site_name_long}</li>
                        <li className="collection-item"><strong>Rocket:</strong> {launch.rocket.rocket_name}</li>
                        <li className="collection-item"><strong>Rocket Type:</strong> {launch.rocket.rocket_type}</li>
                    </ul>
                </div>
                <hr />
                <h5>Payloads</h5>
                {payloadElements}


            </div>
        </div>

    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const mapStateToProps = state => {
    return { launch: state.detail };
}

const VisibleCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)

export default VisibleCard
