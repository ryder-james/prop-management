import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import history from '../../history';
import EditNewsletterForm from './newsletterEditForm';

class EditNewsletter extends Component {
    onSubmit = fields => {
        history.push('/dashboard');
    }

    onCancel = () => {
        history.goBack();
    }

    componentDidMount() {
        this.props.fetchNewsletterWithID(this.props.match.params.id);
    }

    render() {
        return (
            <div className="new-newsletter">
                <EditNewsletterForm
                    onSubmit={event => this.onSubmit(event)}
                    onCancel={() => this.onCancel()}
                    formTitle="Edit Newsletter"
                />
            </div>
        );
    }
}

export default connect(null, actions)(EditNewsletter);