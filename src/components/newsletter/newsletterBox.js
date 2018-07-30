import React, { Component } from 'react';
import { connect } from 'react-redux';

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

class NewsletterBox extends Component {
    render() {
        const { date } = this.props;
        if (!date) {
            return <div>loading...</div>
        }
        return (
            <div className="newsletter-box">
                <div className="newsletter-box__day">{date.getDate()}</div>
                <div className="newsletter-box__month-year">{monthNames[date.getMonth()].substring(0, 3)} {date.getFullYear()}</div>
                <div className="newsletter-box__point"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { newsletters } = state.newsletters;
    const latestNewsletter = newsletters[0];
    return {
        ...latestNewsletter
    }
}

export default connect(mapStateToProps)(NewsletterBox);