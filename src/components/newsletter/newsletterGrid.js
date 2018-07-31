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
                {this.props.title ? <div className="newsletter-grid__title">{this.props.title}</div> : ""}
                <Button className="newsletter-grid__button" callback={() => this.handleAddNewsletter()} icon={this.props.buttonIcon ? this.props.buttonIcon : null} text={this.props.buttonText ? this.props.buttonText : null}/>
                <NewsletterBox date={this.props.date}/>
                {this.props.renderArchive ? <NewsletterArchive/> : ""}
                <Newsletter newsletterID={this.props.ID ? this.props.ID : null}/>
            </div>
        );
    }
}

export default connect(null, actions)(NewsletterGrid);