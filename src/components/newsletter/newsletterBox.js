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
            return <div>fetching newsletters...</div>
        }

        const parsedDate = new Date(date);

        return (
            <div className="newsletter-box">
                <div className="newsletter-box__day">{parsedDate.getDate()}</div>
                <div className="newsletter-box__month-year">{monthNames[parsedDate.getMonth()].substring(0, 3)} {parsedDate.getFullYear()}</div>
                <div className="newsletter-box__point"/>
            </div>
        );
    }
}

export default NewsletterBox;