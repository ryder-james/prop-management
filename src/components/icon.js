import React from 'react';

const Icon = props => {
    const { icon } = props;
    return (
        <i className={`icon ${icon}`}/>
    );
}

export default Icon;