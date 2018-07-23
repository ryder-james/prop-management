import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import SignUpForm from './signupForm';

class SignUp extends Component {
    onSubmit = (fields) => {
        this.props.signUp(fields, () => {
            this.props.history.push("/dashboard");
        });
    }

    render() {
        return (
            <div className="sign-up">
                <SignUpForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        );
    }
}

export default connect(null, actions)(SignUp);