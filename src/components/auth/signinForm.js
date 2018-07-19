import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput } from '../formFields';

class SignInForm extends Component {
    render() {
        return (
            <div className="sign-in-form">
                <FormTitle className='sign-in-form__title' text='Login'/>
                <Field className="sign-in-form__email" name="email" component={FormInput}/>
            </div>
        );
    }
}

SignInForm = reduxForm({
    form: 'signin'
})(SignInForm);

export default SignInForm;