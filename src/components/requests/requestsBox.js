import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class RequestsBox extends Component {
    constructor() {
        super();

        this.state = {
            active: false
        }
    }

    render() {
        const { count, title, icon } = this.props;

        this.active = false;

        if (this.props.selectedRequests == title) {
            this.active = true;
        }

        return (
            <a onClick={() => this.props.changeSelectedRequest(title)} className={`requests-box ${this.active ? "active" : ""}`}>
                <div className="requests-box__count">{count}</div>
                <div className="requests-box__title">{title}</div>
                <div className={`requests-box__icon ${icon}`}/>
                {this.active ? <div className="requests-box__point"/> : ""}
            </a>
        );
    }
}

function mapStateToProps(state) {
    const { selectedRequests } = state.requests;

    return {
        selectedRequests
    }
}

export default connect(mapStateToProps, actions)(RequestsBox);