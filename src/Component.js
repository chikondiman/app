import React, { useState } from 'react';

function Component() {
    const [snack1, setCount1] = useState(0);
    const [snack2, setCount2] = useState(0);

    return (
     <div>
        <p>You voted for {snack1} </p>
       <button onClick={() => setCount1(snack1 + 1)}>
        Vote 
        </button>

        <p>You voted for {snack2} </p>
       <button onClick={() => setCount2(snack2 + 1)}>
        Vote
        </button>
      </div>
   );
  }

  
  export default Component 