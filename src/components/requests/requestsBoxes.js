import React, { Component } from 'react';
import RequestsBox from './requestsBox';

class RequestsBoxes extends Component {
    render() {
        return (
            <div className="requests-boxes">
                <RequestsBox title="Pending" count={3}/>
                <RequestsBox title="In Progress" count={1}/>
                <RequestsBox title="Complete" count={0}/>
            </div>
        );
    }
}

export default RequestsBoxes
;