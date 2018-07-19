import React, { Component } from 'react';

export class FormInput extends Component {
    render() {
        const { className, title, input, type, placeholder } = this.props;
        return (
            <div className='form-input'>
            <label>{title}</label>
                <input 
                    className={`${className} form-input__input`}
                    type={type}
                    {...input}
                    placeholder={placeholder}
                />
            </div>
        )
    }

}