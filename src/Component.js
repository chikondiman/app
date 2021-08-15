import React, { useState } from 'react';

function Component() {
    const [snack1, setCount1] = useState(0);
    const [snack2, setCount2] = useState(0);
   // const [votesAvailable, setVotesAvailable] = useState(3);
    return (
     <div>
        {/* <p> Votes Left: {votesAvailable} </p> */}
        <p> Votes: {snack1} </p>
       {/* <button onClick={() => setCount1(snack1 + 1), setVotesAvailable(votesAvailable - 1)}>
        Vote here 
        </button> */}

        <p>Votes: {snack2} </p>
       <button onClick={() => setCount2(snack2 + 1)}>
        Vote Here
        </button>
      </div>
   );
  }

  
  export default Component 