import React, { Component } from 'react';
import NewsletterGrid from './newsletterGrid';

class NewsletterDetail extends Component {
    render() {
        return (
            <div className="newsletter-wrapper">
                <NewsletterGrid title="Newsletter Archive" ID={this.props.match.params.id} buttonText="Cancel"/>
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

export default NewsletterDetail;