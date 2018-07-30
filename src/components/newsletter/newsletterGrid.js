import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import history from '../../history';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import Newsletter from './newsletter';
import Button from '../button';

class NewsletterGrid extends Component {
    handleAddNewsletter = () => {
        history.push('/newsletter/new');
    }

    componentDidMount() {
        this.props.fetchNewsletters();
    }

    render() {
        return (
            <div className="newsletter-grid">
                <Button className="newsletter-grid__button" callback={() => this.handleAddNewsletter()} icon="fas fa-plus"/>
                <NewsletterBox/>
                <NewsletterArchive/>
                <Newsletter/>
            </div>
        );
    }
}

export default connect(null, actions)(NewsletterGrid);