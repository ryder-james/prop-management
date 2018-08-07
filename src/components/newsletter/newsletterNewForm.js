import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormButton, FormTextArea, FormImage } from "../formFields";

class NewNewsletterForm extends Component {
    render() {
        const { handleSubmit, formTitle } = this.props;
        const {
            fieldOnePlaceholder, fieldOneTitle,
            fieldTwoPlaceholder, fieldTwoTitle
        } = this.props;

        return (
            <form onSubmit={handleSubmit} className="new-newsletter-form">
                <FormTitle className="new-newsletter-form__title" text={formTitle}/>
                <Field
                    className="new-newsletter-form__newsletter-title"
                    placeholder={fieldOnePlaceholder}
                    title={fieldOneTitle}
                    name="title"
                    type="text"
                    component={FormInput}
                />
                <Field
                    className="new-newsletter-form__body"
                    placeholder={fieldTwoPlaceholder}
                    title={fieldTwoTitle}
                    name="body"
                    type="text"
                    component={FormTextArea}
                />
                <Field
                    className="new-newsletter-form__submit"
                    small={true}
                    danger={true}
                    title="Submit"
                    name="submit"
                    type="submit"
                    component={FormButton}
                />
                <Field
                    className="new-newsletter-form__cancel"
                    small={true}
                    title="Cancel"
                    name="cancel"
                    type="button"
                    component={FormButton}
                    onClick={this.props.onCancel}
                />
                <Field
                    className="new-newsletter-form__image"
                    small={true}
                    name="image"
                    type="file"
                    title="Image"
                    component={FormImage}
                />
            </form>
        );
    }
}

NewNewsletterForm = reduxForm({
    form: "newnewsletter"
})(NewNewsletterForm);

export default NewNewsletterForm;