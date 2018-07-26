import React from 'react';

export default function Button({className, callback, text, icon}) {
    if (text) {
        return (
            <a onClick={callback} className={`${className} button`}>
                {text}
            </a>
        );
    }
    if (icon) {
        return (
            <a onClick={callback} className={`${className} button`}>
                <i className={icon}/>
            </a>
        );
    }
}