import React, {useState} from "react";


const Counter = ()=>{
const[count, setCount] = useState(0);
const handleIncrement = ()=>{
setCount(count + 1);
}

const handleDecrement = ()=>{
    setCount( count - 1);
}

return(
<div>
<p>count is: {count}</p>
<button onClick={handleIncrement}>Plus</button>
<button onClick={handleDecrement}>Minus</button>

</div>

)
}

export default Counter;