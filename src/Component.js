import React, { useState } from 'react';

function Component() {
    const [snack1, setCount1] = useState(0);
    const [snack2, setCount2] = useState(0);
    const snacks = [snack1, snack2];

   const [votesAvailable, setVotesAvailable] = useState(3);

   function subtractVote(votesAvailable)
   {
    return votesAvailable - 1;

   }
    return (
     <div>
        <p> Votes Remaining: {votesAvailable} </p>
        <p> Votes: {snack1} </p>
       <button onClick={() => {
         setCount1(snack1 + 1);
         subtractVote(votesAvailable - 1);


         }}>
        Vote  
        </button>

        <p>Votes: {snack2} </p>
       <button onClick={() => setCount2(snack2 + 1)}>
        Vote 
        </button>

      
      </div>
   );
  }

  
  export default Component 