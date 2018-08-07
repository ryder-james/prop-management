import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import TabNav from './tabnav';
import NewsletterGrid from './newsletter/newsletterGrid';
import history from '../history';
import RequestsGrid from './requests/requestsGrid';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: "Newsletter",
                    active: true,
                    component: <NewsletterGrid renderArchive={true} buttonIcon="fas fa-plus" callback={() => history.push('/newsletter/new')}/>
                },
                {
                    title: "Requests",
                    active: false,
                    component: <RequestsGrid/>
                }
            ]
        }
    }

    handleTabChange = title => {
        const tabs = this.state.tabs;

        tabs.map(tab => {

            tab.active = (tab.title == title);

        });

        this.setState({tabs});
    }

    componentDidMount() {
        this.props.updateHeader(`Welcome ${this.props.name}`, "HOA Management", true)
    }

    render() {
        return (
            <div className="dashboard">
                <TabNav handleClick={title => this.handleTabChange(title)} tabs={this.state.tabs}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.auth.user.fullname
    }
}

export default connect(mapStateToProps, actions)(Dashboard);