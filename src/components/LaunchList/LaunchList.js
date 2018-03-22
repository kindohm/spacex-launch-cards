import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLaunches, setDetail } from './../../reducers/index';
import { LaunchListItem } from './LaunchListItem';
import PropTypes from 'prop-types';

class LaunchList extends Component {
    componentDidMount() {
        this.fetchLaunches();
    }

    fetchLaunches() {
        const url = 'https://api.spacexdata.com/v2/launches';
        fetch(url).then(function (response) {
            return response.json();
        }).then(data => {
            this.props.setLaunches(data);
        });
    }

    render() {
        const launchElements = this.props.launches ? this.props.launches.map(launch => {
            return <div key={launch.flight_number} className="col s3">
                <LaunchListItem
                    success={launch.launch_success}
                    selectLaunch={this.props.setDetail}
                    flightNumber={launch.flight_number}
                    missionPatchUrl={launch.links.mission_patch} /></div>;
        }) : null;

        return <div className="row">{launchElements}</div>;
    }

}

LaunchList.propTypes = {
    launches: PropTypes.arrayOf(PropTypes.object),
    setLaunches: PropTypes.func,
    setDetail: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
    return {
        setLaunches: launches => dispatch(setLaunches(launches)),
        setDetail: flightNumber => dispatch(setDetail(flightNumber))
    };
};

const mapStateToProps = state => {
    return { launches: state.launches };
};

const VisibleLaunchList = connect(
    mapStateToProps,
    mapDispatchToProps
)(LaunchList);

export default VisibleLaunchList;
