import React, { useState } from 'react';

function Component() {
    const [snack1, setCount1] = useState(0);
    const [snack2, setCount2] = useState(0);
   const [votesAvailable, setCount3] = useState(3);
    return (
     <div>
        <p> Your Available Votes: {votesAvailable} </p>
        <p> Votes: {snack1} </p>
       <button onClick={() => setCount1(snack1 + 1), setCount3(votesAvailable - 1)}>
        Vote here 
        </button>

        <p>Votes: {snack2} </p>
       <button onClick={() => setCount2(snack2 + 1)}>
        Add here
        </button>
      </div>
   );
  }

  
  export default Component 