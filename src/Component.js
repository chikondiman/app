import React, { useState } from 'react';

function Component() {
    const [snack1, setCount1] = useState(0);
    const [snack2, setCount2] = useState(0);
    const snacks = [snack1, snack2];

    const [votesAvailable, subtractVote] = useState(3);

 
    return (
     <div>
        <p> Votes Left: {votesAvailable} </p>
        <p> ChexMix: {snack1} </p>
       <button onClick={() => {
         subtractVote(votesAvailable - 1);
         setCount1(snack1 + 1);
         


         }}>
        Vote  
        </button>

        <p>Nasbisco Oreos: {snack2} </p>
       <button onClick={() => {
         subtractVote(votesAvailable - 1);
         setCount2(snack2 + 1)
       }}>
        Vote 
        </button>

      
      </div>
   );
  }

  
  export default Component 