import React, { Component } from 'react';

import history from '../../history';
import NewNewsletterForm from './newsletterNewForm';

class EditNewsletter extends Component {
    onSubmit = fields => {
        history.push('/dashboard');
    }

    onCancel = () => {
        history.push('/dashboard');
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
    }

    render() {
        return (
            <div className="new-newsletter">
                <NewNewsletterForm
                    onSubmit={event => this.onSubmit(event)}
                    onCancel={() => this.onCancel()}
                    title="Edit Newsletter"
                />
            </div>
        );
    }
}

export default EditNewsletter;