import React, { Component } from 'react';

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
            return <div>loading newsletters...</div>
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

export default NewsletterBox;