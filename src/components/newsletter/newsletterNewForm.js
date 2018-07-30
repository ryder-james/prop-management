import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";

import { FormTitle } from "../formTitle";
import { FormInput, FormButton, FormTextArea, FormImage } from "../formFields";

class NewNewsletterForm extends Component {
    render() {
        const { handleSubmit, onCancel, title, newsletterToEdit } = this.props;
        if (newsletterToEdit) {
            const { titleToEdit, bodyToEdit, imageToEdit }  = newsletterToEdit;
        }
        
        return (
            <form onSubmit={handleSubmit} className="new-newsletter-form">
                <FormTitle className="new-newsletter-form__title" text={title}/>
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
                    placeholder="Newsletter Body"
                    title="Body"
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
                    onClick={onCancel}
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