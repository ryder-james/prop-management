import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class SignUpForm extends Component {
    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormTitle className="sign-up-form__title" text="New User" />
                <Field
                    className="sign-up-form__fullname"
                    placeholder="Enter your Full Name"
                    title="Full Name"
                    name="fullname"
                    type="text"
                    component={FormInput}
                />
                <Field
                    className="sign-up-form__unit"
                    placeholder="Enter Unit #"
                    title="Unit #"
                    name="unit"
                    type="text"
                    component={FormInput}
                />
                <Field
                    className="sign-in-form__email-sign-up"
                    placeholder="Email"
                    title="Email"
                    name="email"
                    type="email"
                    component={FormInput}
                />
                <Field
                    className="sign-in-form__password"
                    placeholder="Password"
                    title="Password"
                    name="password"
                    type="password"
                    component={FormInput}
                />
                <Field
                    className="sign-up-form__form-button"
                    title="Create Account"
                    name="createaccount"
                    type="submit"
                    component={FormButton}
                />
                <div className="sign-up-form__text-links">
                    <TextLink to="/signin" text="Already Registered? Login" />
                </div>
            </form>
        );
    }
}

SignUpForm = reduxForm({
    form: "signUp"
})(SignUpForm);

export default SignUpForm;