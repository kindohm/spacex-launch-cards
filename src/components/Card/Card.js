import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { nextIndex, previousIndex } from './../../reducers/index';
import PropTypes from 'prop-types';
import { PayloadList } from './Payload';

const buttonStyle = {
    marginTop: '150%'
};

class Card extends Component {
    render() {
        const launch = this.props.launch;
        const date = moment(launch.launch_date_utc).format('LLL');

        return <div className="row z-depth-3" style={{ paddingBottom: '20px', backgroundColor: '#fff' }}>
            <div className="col s1">
                <a style={buttonStyle} className="btn-floating btn-large blue-grey darken-2" onClick={this.props.previousIndex}>
                    <i className="material-icons">chevron_left</i>
                </a>
            </div>
            <div className="col s3 center-align">
                <img style={{
                    marginTop: '30px',
                    maxWidth: '100%',
                    maxHeight: '400px'
                }} alt={launch.flight_number} src={launch.links.mission_patch} />

                <h3 style={{ marginTop: '0px' }} className={launch.launch_success ? 'green-text' : 'red-text'}>{launch.launch_success ? 'Success' : 'Failed'}</h3>

            </div>
            <div className="col s7">

                <div className="col s12">
                    <h3 className="blue-grey-text text-darken-2">Flight #{launch.flight_number}</h3>

                    <p>{date}</p>
                    <p className="">{launch.details}</p>

                    <ul className="">
                        <li className="collection-item"><strong>Launch Site:</strong> {launch.launch_site.site_name_long}</li>
                        <li className="collection-item"><strong>Rocket:</strong> {launch.rocket.rocket_name}</li>
                        <li className="collection-item"><strong>Rocket Type:</strong> {launch.rocket.rocket_type}</li>
                    </ul>
                </div>

                <PayloadList launch={launch} />

            </div>


            <div className="col s1 right-align">
                <a style={buttonStyle} className="btn-floating btn-large blue-grey darken-2" onClick={this.props.nextIndex}>
                    <i className="material-icons">chevron_right</i>
                </a>

            </div>
        </div>;

    }
}

Card.propTypes = {
    launch: PropTypes.object,
    nextIndex: PropTypes.func,
    previousIndex: PropTypes.func
};

const mapDispatchToProps = dispatch => {
    return {
        nextIndex: () => dispatch(nextIndex()),
        previousIndex: () => dispatch(previousIndex())
    };
};

const mapStateToProps = state => {
    return { launch: state.detail };
};

const VisibleCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);

export default VisibleCard;
