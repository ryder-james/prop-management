import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import history from '../../history';
import NewNewsletterForm from './newsletterNewForm';

class EditNewsletter extends Component {
    onSubmit = fields => {
        history.push('/dashboard');
    }

    onCancel = () => {
        history.push('/dashboard');
    }

    componentDidMount() {
        console.log(this.props.fetchNewsletterWithID(this.props.match.params.id));
    }

    render() {
        return (
            <div className="new-newsletter">
                <NewNewsletterForm
                    newsletterToEdit={this.props.newsletterToEdit}
                    onSubmit={event => this.onSubmit(event)}
                    onCancel={() => this.onCancel()}
                    title="Edit Newsletter"
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { newsletterToEdit } = state.newsletters;
    return {
        newsletterToEdit
    }
}

export default connect(mapStateToProps, actions)(EditNewsletter);