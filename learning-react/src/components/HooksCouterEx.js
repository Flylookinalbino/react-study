import React, {useState} from 'react';

const HooksCouterEx = () => {
    // Hook holds data count and is set by setCount
    // useState(default_value)
    const [count, setCount] = useState(0)
    
    function minus(){
        return count - 1;
    }

    return (
        <div>
            <h1>
                {count}
            </h1>
            <h1 onClick={() => setCount(count+1)}>
                Plus
            </h1>
            <h1 onClick={() => setCount(minus)}>
                Minus
            </h1>    
        </div>
    );
}

export default HooksCouterEx;
