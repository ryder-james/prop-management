import React, { Component } from 'react';

class TabNav extends Component {
    render() {
        return (
            <div className="tab-nav">
                {
                    this.props.tabs.map((tab, index) => {
                        return <a className="tab-nav__tab">{tab.title}</a>
                    })
                }
            </div>
        );
    }
}

export default TabNav;