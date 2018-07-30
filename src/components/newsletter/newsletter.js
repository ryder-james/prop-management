import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../../history';

import Button from '../button';

class Newsletter extends Component {
    handleEdit = () => {
        history.push(`/newsletter/edit/${this.props._id}`);
    }

    render() {
        const { title, imageUrl, body } = this.props;
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
    const { newsletters } = state.newsletters;
    const latestNewsletter = newsletters[0];
    return {
        ...latestNewsletter
    }
}

export default connect(mapStateToProps)(Newsletter);