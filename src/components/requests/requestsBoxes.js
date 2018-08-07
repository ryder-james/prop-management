import React, { Component } from 'react';

import { connect } from 'react-redux';

import RequestsBox from './requestsBox';
import { PENDING, PROGRESS, COMPLETE } from '../../actions/types';

class RequestsBoxes extends Component {
    render() {
        return (
            <div className="requests-boxes">
                <RequestsBox title="Pending" type={PENDING} count={this.props.pendingCount} icon="fas fa-exclamation-triangle"/>
                <RequestsBox title="In Progress" type={PROGRESS} count={this.props.progressCount} icon="fas fa-wrench"/>
                <RequestsBox title="Complete" type={COMPLETE} count={this.props.completeCount} icon="fas fa-check-square"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { requests } = state.requests;

    let pendingCount = 0, progressCount = 0, completeCount = 0;

    requests.map(request => {
        switch (request.status) {
            case PENDING:
                pendingCount++;
                break;
            case PROGRESS:
                progressCount++;
                break;
            case COMPLETE:
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