import React from 'react';

const Die = ({ value, locked, lockDie }) => {
    return (
        <div className={locked ? 'die locked' : 'die'} onClick={lockDie}>
            <p>{value}</p>
        </div>
    );
};

export default Die;
