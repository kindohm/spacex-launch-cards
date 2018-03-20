import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setLaunches, setDetail } from "./../../reducers/index";
import LaunchListItem from "./LaunchListItem";

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

    itemClick(item){
        this.props.setDetail(item);
    }

    render() {
        const launchElements = this.props.launches ? this.props.launches.map(launch => {
            return <li key={launch.flight_number} onClick={this.itemClick.bind(this, launch)}>
                <LaunchListItem date={launch.launch_date_utc} flightNumber={launch.flight_number}></LaunchListItem>
            </li>;
        }) : null;

        return <ul>{launchElements}</ul>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLaunches: launches => dispatch(setLaunches(launches)),
        setDetail: launch => dispatch(setDetail(launch))
    }
}

const mapStateToProps = state => {
    return { launches: state.launches };
}

const VisibleLaunchList = connect(
    mapStateToProps,
    mapDispatchToProps
)(LaunchList)

export default VisibleLaunchList
