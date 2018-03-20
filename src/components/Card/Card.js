import React, { Component } from "react";
import { connect } from 'react-redux'

const na = 'N/A';

const defaultProps = {
    title: na,
    siteName: na,
    missionPatch: na,
    details: na,
    rocketName: na,
    rocketType: na,
    success: false,
    date: na,
    payload: na
};

class Card extends Component {
    render() {
        return <div><h3>{this.props.title}</h3>
            <p><strong>Date:</strong> {this.props.date}</p>
            <p><strong>Launch Site:</strong> {this.props.siteName}</p>
            <p><strong>Rocket:</strong> {this.props.rocketName}</p>
            <p><strong>Rocket Type:</strong> {this.props.rocketType}</p>
            <p><strong>Payload:</strong> {this.props.payload}</p>
            <p><strong>Success:</strong> {this.props.success}</p>
            <p><img style={{maxWidth: '300px'}} alt={this.props.title} src={this.props.missionPatch}/> </p>
            <p>Details: {this.props.details}</p>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const mapStateToProps = state => {
    const detail = state.detail;

    if (!detail) return defaultProps;
    return {
        title: `Flight Number: ${detail.flight_number}`,
        siteName: detail.launch_site.site_name_long,
        missionPatch: detail.links.mission_patch,
        details: detail.details || na,
        rocketName: detail.rocket.rocket_name,
        rocketType: detail.rocket.rocket_type,
        success: detail.launch_success ? "Yes" : "No",
        date: detail.launch_date_utc,
        payload: detail.rocket.second_stage && detail.rocket.second_stage.payloads ? detail.rocket.second_stage.payloads[0].payload_type : na
    };
}

const VisibleCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)

export default VisibleCard