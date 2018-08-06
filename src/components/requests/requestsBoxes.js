import React, { Component } from 'react';

import { connect } from 'react-redux';

import RequestsBox from './requestsBox';

class RequestsBoxes extends Component {
    render() {
        return (
            <div className="requests-boxes">
                <RequestsBox title="Pending" count={this.props.pendingCount} icon="fas fa-plus"/>
                <RequestsBox title="In Progress" count={this.props.progressCount} icon="fas fa-plus"/>
                <RequestsBox title="Complete" count={this.props.completeCount} icon="fas fa-plus"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { requests } = state.requests;

    let pendingCount = 0, progressCount = 0, completeCount = 0;

    requests.map(request => {
        switch (request.status) {
            case "pending":
                pendingCount++;
                break;
            case "progress":
                progressCount++;
                break;
            case "complete":
                completeCount++;
                break;
            default:
                console.log("¯\_(ツ)_/¯");
        }
    });

    return {
        pendingCount,
        progressCount,
        completeCount
    }
}

export default connect(mapStateToProps)(RequestsBoxes);