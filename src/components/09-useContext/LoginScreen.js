import React, { useContext } from 'react';

import './style.css';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button
                className="btn btn-warning"
                onClick={() => {
                    setUser({
                        id: 123,
                        name: 'John Doe',
                    });
                }}
            >
                Add user
            </button>
        </div>
    );
};
