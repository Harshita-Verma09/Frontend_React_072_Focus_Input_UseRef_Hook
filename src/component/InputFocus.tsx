import React, { useEffect, useRef } from 'react';
import './InputFocus.css';

const InputFocus = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus(); // Auto focus on mount
        }
    }, []);

    const handleFocus = () => {
        inputRef.current?.focus(); // Manual focus on button click
    };
    
    

    return (
        <div className="container">
            <h2>Auto Focus Input</h2>
            <p className="info">Cursor automatically appears in the box below. Click the button if it loses focus.</p>

            <div className="input-group">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type here..."
                    className="input"
                />
                <button className="btn" onClick={handleFocus}>
                    Focus Again
                </button>
            </div>
        </div>
    );
};

export default InputFocus;
