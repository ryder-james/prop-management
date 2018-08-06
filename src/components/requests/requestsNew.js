import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from '../newsletter/newsletterNewForm';

class NewRequest extends Component {
    onSubmit = fields => {
        // if(button == 'submit') {
        //   // save new newsletter on the backend. perform a post request here.
        //   console.log('trying to submit to backend.');
        // }
        this.props.createNewRequest(this.props._id, fields, () => {
            this.props.history.push('/dashboard');
        });
    };

    onCancel = () => {
        this.props.history.push('/dashboard');
    };

    render() {
        return (
            <div className="new-request">
                <NewNewsletterForm
                    onCancel={() => this.onCancel()}
                    onSubmit={event => this.onSubmit(event)}
                    formTitle="New Request"
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { _id } = state.auth.user;
    return { 
        _id 
    }
}

export default connect(mapStateToProps, actions)(NewRequest);