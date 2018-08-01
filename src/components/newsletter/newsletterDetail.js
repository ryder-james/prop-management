import React, { Component } from 'react';
import NewsletterGrid from './newsletterGrid';
import history from '../../history';

class NewsletterDetail extends Component {
    render() {
        return (
            <div className="newsletter-wrapper">
                <NewsletterGrid title="Newsletter Archive" ID={this.props.match.params.id} buttonText="Cancel" callback={() => history.push('/dashboard')}/>
            </div>
        );
    }
}

export default NewsletterDetail;