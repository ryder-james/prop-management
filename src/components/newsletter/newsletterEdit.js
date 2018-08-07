import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import history from '../../history';
import EditNewsletterForm from './newsletterEditForm';

class EditNewsletter extends Component {
    onSubmit = fields => {
        const { title, body, image } = fields;

        var formData = new FormData();

        formData.append("title", title)
        formData.append("body", body);
        formData.append("image", image);
     
        this.props.editNewsletter(this.props.match.params.id, formData, () => {
            history.push('/dashboard');
        })
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