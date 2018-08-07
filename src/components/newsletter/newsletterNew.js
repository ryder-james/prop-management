import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import history from '../../history';

import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {
    onSubmit = fields => {
        const { title, body, image } = fields;

        const formData = new FormData();
        formData.append("title", title);
        formData.append("body", body);
        formData.append("image", image);

        this.props.createNewNewsletter(this.props._id, formData, () => {
            history.push('/dashboard');
        })
    }

    onCancel = () => {
        history.push('/dashboard');
    }

    render() {
        return (
            <div className="new-newsletter">
                <NewNewsletterForm 
                    onSubmit={event => this.onSubmit(event)} 
                    onCancel={() => this.onCancel()} 
                    formTitle="New Newsletter"
                    fieldOnePlaceholder="Newsletter Title"
                    fieldOneTitle="Newsletter Title"
                    fieldTwoPlaceholder="Body Here"
                    fieldTwoTitle="Body"
                />
            </div>
        );
    }
}

export default connect(null, actions)(NewNewsletter);