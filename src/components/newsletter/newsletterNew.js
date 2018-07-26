import React, { Component } from 'react';
import SignInForm from '../auth/signinForm';

class NewNewsletter extends Component {
    onSubmit = fields => {
        console.log("trying to handle submit");
    }

    render() {
        return (
            <div className="new-newsletter">
                <SignInForm onSubmit={event => this.onSubmit(event)}/>
            </div>
        );
    }
}

export default NewNewsletter;