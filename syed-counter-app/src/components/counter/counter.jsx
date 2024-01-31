import React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import './counter.css';
function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <div className="app-conatiner">
            <h1>Counter App</h1>
            <h2>{number}</h2>
            <Button variant="contained" id="app-btn"  
            data-testid="decrement-btn" onClick={() => setNumber(number - 1)}>Decrement</Button>
            <Button variant="contained" id="app-btn"  
            data-testid="increment-btn" onClick={() => setNumber(number + 1)}>Increment</Button>
        </div>
    );
}

export default Counter;
