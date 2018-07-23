import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class SignInForm extends Component {
    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit} className="sign-in-form">
                <FormTitle className='sign-in-form__title' text='Login' />
                <Field
                    className="sign-in-form__email-sign-in"
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
                    className="sign-in-form__form-button"
                    title="Login"
                    name="login"
                    type="submit"
                    component={FormButton}
                />
                <div className="sign-in-form__text-links">
                    <TextLink to="/forgot" text="Forgot Password"/>
                    <TextLink to="/signup" text="Not a member? Register here"/>
                </div>
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'signin'
})(SignInForm);

export default SignInForm;