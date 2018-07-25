import React, { Component } from 'react';

class TabNav extends Component {
    render() {
        var JSX = [
            <h1>TABS</h1>
        ];

        this.props.tabs.map((tab, index) => {
            JSX.push(<h2>{tab.component}</h2>)
        });

        return JSX;
    }
}

export default TabNav;