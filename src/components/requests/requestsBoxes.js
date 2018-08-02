import React, { Component } from 'react';
import RequestsBox from './requestsBox';

class RequestsBoxes extends Component {
    render() {
        return (
            <div className="requests-boxes">
                <RequestsBox title="Pending" count={3} icon="fas fa-plus"/>
                <RequestsBox title="In Progress" count={1} icon="fas fa-plus"/>
                <RequestsBox title="Complete" count={0} icon="fas fa-plus"/>
            </div>
        );
    }
}

export default RequestsBoxes
;