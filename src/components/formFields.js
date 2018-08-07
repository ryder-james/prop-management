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
        const { className, small, danger, title, input, type, onClick } = this.props;
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
                    onClick={onClick}
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

export class FormImage extends Component {
    handleSelectedImage = event => {
        const { input: { onChange } } = this.props;
        const image = document.querySelector("#newsletter-new-image");
        image.src = URL.createObjectURL(event.target.files[0]);
        onChange(event.target.files[0]);
    }

    render() {
        const { className, title, input, imageURL } = this.props;

        return (
            <div className={`${className} form-image`}>
                <label className="form-image__title">{title}</label>
                <img 
                    id="newsletter-new-image"
                    className="form-image__image"
                    src={imageURL}
                />
                <input
                    className="form-image__replace"
                    type="button"
                    value="Replace"
                    onClick={
                        () =>
                        document.querySelector("#file") ? document.querySelector("#file").click() : ""
                    }
                />
                <input 
                    {...input} 
                    type="file"
                    style={{display: "none"}}
                    id="file"
                    name="file"
                    accepts='image/*'
                    value={undefined}
                    onChange={this.handleSelectedImage}
                />

            </div>
        );
    }
}