import React from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
    const inputRef = React.useRef();

    const handleClick = () => {
        inputRef.current.focus();
        console.log(inputRef.current);
    };
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Your name"
                ref={inputRef}
            />

            <button
                className="btn btn-outline-warning mt-5"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    );
};
