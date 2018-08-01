import React, { Component } from 'react';

import history from '../../history';

import Button from '../button';

class Newsletter extends Component {
    handleEdit = () => {
        history.push(`/newsletter/edit/${this.props._id}`);
    }

    // componentDidMount() {
    //     if (this.props.newsletterID) {
    //         this.props.fetchNewsletterWithID(this.props.newsletterID);
    //     }
    // }

    render() {
        var { title, imageUrl, body, newsletterID, newsletterToEdit } = this.props;

        // if (newsletterID) {
        //     var { title, imageUrl, body } = newsletterToEdit;
        // }

        return (
            <div className="newsletter">
                <h1 className="newsletter__title">{title}</h1>
                <img className="newsletter__image" src={imageUrl}/>
                <Button className="newsletter__button" callback={() => this.handleEdit()} icon="fas fa-pencil-alt"/>
                <div className="newsletter__body">
                    <p>{body}</p>
                </div>
            </div>
        );
    }
}

export default Newsletter;