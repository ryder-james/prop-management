import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import history from '../../history';

import Button from '../button';

class Newsletter extends Component {
    handleEdit = () => {
        history.push(`/newsletter/edit/${this.props._id}`);
    }

    componentDidMount() {
        if (this.props.newsletterID) {
            this.props.fetchNewsletterWithID(this.props.newsletterID);
        }
    }

    render() {
        var { title, imageUrl, body, newsletterID, newsletterToEdit } = this.props;

        if (newsletterID) {
            var { title, imageUrl, body } = newsletterToEdit;
        }

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

function mapStateToProps(state) {
    const { newsletters, newsletterToEdit } = state.newsletters;
    const latestNewsletter = newsletters[0];
    return {
        ...latestNewsletter,
        newsletterToEdit
    }
}

export default connect(mapStateToProps, actions)(Newsletter);