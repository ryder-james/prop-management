import React, { Component } from 'react';
import Newsletter from './newsletter';

class NewsletterDetail extends Component {
    render() {
        return (
            <div className="newsletter-detail">
                <Newsletter newsletterID="115"/>
            </div>
        );
    }
}

export default NewsletterDetail;