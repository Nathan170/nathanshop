import React, { useState } from 'react';

function Hooks() {
    const state = useState();
    const [count, setCount] = useState(0);
    function Jimbo()
    {
        setCount(count + 1);
    };
    return(
        <>
        <div className="text-center">
            <h1 className="display-1">{count}</h1>
            <button type="button" className="btn btn-danger btn-lg" onClick={Jimbo} >Click Here</button>
        </div>
    </>
    );
    
}
export default Hooks;
