import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
    console.log(`Im incremented again`);

    return (
        <button
            className="btn btn-warning"
            onClick={() => {
                increment();
            }}
        >
            increment
        </button>
    );
});
