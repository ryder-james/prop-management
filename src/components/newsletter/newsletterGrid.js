import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import RequireAdmin from '../auth/requireAdmin';
import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import Newsletter from './newsletter';
import Button from '../button';
import { FormTitle } from '../formTitle';

class NewsletterGrid extends Component {
    componentDidMount() {
        this.props.fetchNewsletters();
        this.props.fetchNewsletterWithID(this.props.ID);
    }

    render() {
        if (this.props.ID) {
            this.newsletter = this.props.requestedNewsletter;
        } else {
            this.newsletter = this.props.latestNewsletter;
        }

        return (
            <div className="newsletter-grid">
                {this.props.title ? <FormTitle className="newsletter-grid__title" text={this.props.title}/> : ""}
                <RequireAdmin>
                    <Button 
                        className="newsletter-grid__button" 
                        callback={() => this.props.callback()} 
                        icon={this.props.buttonIcon ? 
                            this.props.buttonIcon : 
                            null} 
                        text={this.props.buttonText ? 
                            this.props.buttonText : 
                            null}/>
                </RequireAdmin>
                {this.props.renderArchive ? <NewsletterArchive/> : ""}
                <Newsletter {...this.newsletter}/>
                <NewsletterBox {...this.newsletter}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { newsletters, requestedNewsletter } = state.newsletters;
    const latestNewsletter = newsletters[0];
    return {
        latestNewsletter,
        requestedNewsletter
    }
}

export default connect(mapStateToProps, actions)(NewsletterGrid);