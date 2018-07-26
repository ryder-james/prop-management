import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormTextArea } from "../formFields";

class NewNewsletterForm extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="new-newsletter-form">
                <FormTitle className="new-newsletter-form__title" text="New Newsletter" />
                <Field
                    className="new-newsletter-form__newsletter-title"
                    placeholder="Newsletter Title"
                    title="Newsletter Title"
                    name="title"
                    type="text"
                    component={FormInput}
                />
                <Field
                    className="new-newsletter-form__body"
                    placeholder="Body"
                    title="Body"
                    name="body"
                    type="text"
                    component={FormTextArea}
                />
            </form>
        );
    }
}

NewNewsletterForm = reduxForm({
    form: "newnewsletter"
})(NewNewsletterForm);

export default NewNewsletterForm;