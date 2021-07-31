import React, { useState } from 'react';

function Component() {
    const [snack1, setCount1] = useState(0);
    const [snack2, setCount2] = useState(0);

    return (
     <div>
        <p>You voted for {snack1} x times</p>
       <button onClick={() => setCount1(snack1 + 1)}>
        Vote for snacks now
        </button>
      </div>
   );
  }

  
  export default Component 