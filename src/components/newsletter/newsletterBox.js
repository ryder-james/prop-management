import React from 'react';

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

const NewsletterBox = ({date}) => {
    return (
        <div className="newsletter-box">
            <div>{date.getDate()}</div>
            <div>{monthNames[date.getMonth()].substring(0, 3)} {date.getFullYear()}</div>
        </div>
    );
}

export default NewsletterBox;