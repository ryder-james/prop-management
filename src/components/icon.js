import React from 'react';

const Icon = props => {
    const { className, icon } = props;
    return (
        <div className={className}>
            <i className={icon}/>
        </div>
    );
}

export default Icon;