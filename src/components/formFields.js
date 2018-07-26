import React, { Component } from 'react';

export class FormInput extends Component {
    render() {
        const { className, title, input, type, placeholder } = this.props;
        return (
            <div className={`${className} form-input`}>
            <label className="form-input__title">{title}</label>
                <input 
                    className="form-input__input"
                    type={type}
                    {...input}
                    placeholder={placeholder}
                />
            </div>
        )
    }
}

export class FormButton extends Component {
    render() {
        const { className, small, danger, title, input, type, placeholder } = this.props;
        const smallClass = `form-button${small ? "-small" : ""}`;
        
        return (
            <div className={`${className} ${smallClass}`}>
                <button
                    className={`
                        ${smallClass}__button
                        ${smallClass}${danger ? "__danger" : ""}
                    `}
                    type={type}
                    {...input}
                >
                    {title}
                </button>
            </div>
        )
    }
}

export class FormTextArea extends Component {
    render() {
        const { className, title, input, type, placeholder } = this.props;
        
        return (
            <div className={`${className} form-textarea`}>
                <label className="form-textarea__title">{title}</label>
                <textarea
                    className="form-textarea__input"
                    type={type}
                    {...input}
                    placeholder={placeholder}
                />
            </div>
        );
    }
}