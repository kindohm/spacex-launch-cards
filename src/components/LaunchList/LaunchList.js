import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setLaunches, setDetail } from "./../../reducers/index";
import Card from "./../Card/Card";
import * as _ from "lodash";

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

    itemClick(item) {
        this.props.setDetail(item);
    }

    render() {
        const launchElements = this.props.launches ? this.props.launches.map(launch => {
            
            const rocket = launch.rocket;
            const secondStage = rocket ? rocket.second_stage : null;
            const payloads = secondStage ? secondStage.payloads : null;

            const payloadsValue = payloads ? 
                _.flatMap(payloads, payload => payload.payload_type).join(', ') : null;

            return <Card flightNumber={launch.flight_number}
                key={launch.flight_number}
                date={launch.launch_date_utc}
                siteName={launch.launch_site.site_name_long}
                rocketType={launch.rocket.rocket_type}
                rocketName={launch.rocket.rocket_name}
                success={launch.launch_success}
                details={launch.details}
                missionPatchUrl={launch.links.mission_patch}
                payload={payloadsValue}
                redditUrl={launch.links.reddit_campaign}
                videoUrl={launch.links.video_link}
                articleUrl={launch.links.article_link}></Card>;
        }) : null;

        return <ul className="nav flex-column">{launchElements}</ul>
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
