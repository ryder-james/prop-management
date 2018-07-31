import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import history from '../../history';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import Newsletter from './newsletter';
import Button from '../button';
import { fetchNewsletters } from '../../actions/newsletter';

class NewsletterGrid extends Component {
    handleAddNewsletter = () => {
        history.push('/newsletter/new');
    }

    componentDidMount() {
        this.props.fetchNewsletters();

        if (this.props.ID) {
            this.props.fetchNewsletterWithID(this.props.ID);
        }

        if (this.props.ID) {
            this.newsletter = this.props.newsletterToEdit;
        } else {
            this.newsletter = this.props.latestNewsletter;
        }

        console.log(this.newsletter);

    }

    render() {
        return (
            <div className="newsletter-grid">
                {this.props.title ? <div className="newsletter-grid__title">{this.props.title}</div> : ""}
                <Button className="newsletter-grid__button" callback={() => this.handleAddNewsletter()} icon={this.props.buttonIcon ? this.props.buttonIcon : null} text={this.props.buttonText ? this.props.buttonText : null}/>
                <NewsletterBox {...this.newsletter}/>
                {this.props.renderArchive ? <NewsletterArchive/> : ""}
                <Newsletter {...this.newsletter}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { newsletters, newsletterToEdit } = state.newsletters;
    const latestNewsletter = newsletters[0];
    return {
        latestNewsletter,
        newsletterToEdit
    }
}

export default connect(mapStateToProps, actions)(NewsletterGrid);