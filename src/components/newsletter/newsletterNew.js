import React, { Component } from 'react';

import history from '../../history';

import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {
    onSubmit = fields => {
        console.log("trying to handle submit");
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

export default NewNewsletter;