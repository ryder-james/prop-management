import React, { Component } from 'react';

class RequestsBox extends Component {
    constructor() {
        super();

        this.state = {
            active: false
        }
    }

    render() {
        const { count, title, icon } = this.props;
        return (
            <a onClick={() => this.setState({ active: !this.state.active})} className={`requests-box ${this.state.active ? "active" : ""}`}>
                <div className="requests-box__count">{count}</div>
                <div className="requests-box__title">{title}</div>
                <div className={`requests-box__icon ${icon}`}/>
                {this.state.active ? <div className="requests-box__point"/> : ""}
            </a>
        );
    }
}

export default RequestsBox;