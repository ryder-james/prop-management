import React from 'react';

const Icon = props => {
    const { callback, className, icon } = props;
    return (
        <a onClick={callback} className={className}>
            <i className={icon}/>
        </a>
    );
}

export default Icon;