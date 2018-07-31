import React, { Component } from 'react';
import TabNav from './tabnav';
import NewsletterGrid from './newsletter/newsletterGrid';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: "Newsletter",
                    active: true,
                    component: <NewsletterGrid renderArchive={true} buttonIcon="fas fa-plus"/>
                },
                {
                    title: "Requests",
                    active: false,
                    component: <h4>Hey There - Requests</h4>
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

    render() {
        return (
            <div className="dashboard">
                <TabNav handleClick={title => this.handleTabChange(title)} tabs={this.state.tabs}/>
            </div>
        );
    }
}

export default Dashboard;