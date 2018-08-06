import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Button from '../button';
import history from '../../history';
import RequestsBoxes from './requestsBoxes';
import Requests from './requests';

class RequestsGrid extends Component {

    componentDidMount() {
        this.props.fetchRequests();
    }

    render() {
        return (
            <div className="requests-grid">
                <Button className="requests-grid__button" callback={() => history.push('/requests/new')} icon="fas fa-plus"/>
                <RequestsBoxes/>
                <Requests/>
            </div>
        );
    }
}

export default connect(null, actions)(RequestsGrid);