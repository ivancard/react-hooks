import React from 'react';

import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

export const RealExampleRef = () => {
    const [show, setShow] = React.useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />
            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-warning mt-5"
                onClick={() => {
                    setShow(!show);
                }}
            >
                {show ? 'Hide' : 'Show'}
            </button>
        </div>
    );
};
