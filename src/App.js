import React, {useCallback, useState} from 'react'
import Child from './Child';

const App = () => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(10000);

  //usecallback (callback, dependency)
  //call this function when decrement is changed
const myFunc =useCallback(
  () => {
    console.log("Hello World");
  }, decrement) 


  return (
    <div>
      <Child decrement = {decrement} myFunc= {myFunc}/>
      <h1>{increment}</h1>
      <button onClick={() => setIncrement(increment+ 1)}>increment</button>
       

       {/*here child component will be called, as decrement is changed */}
      <h1>{decrement}</h1>
      <button onClick={() => setDecrement(decrement - 1)}>decrement</button>


    </div>
  )
}

export default App


// useMemo Hook returns a memoized value.
// useMemo Hook only runs when one of its dependencies update.
// This can improve performance.
// The useMemo and useCallback Hooks are similar. 
// The main difference is that useMemo returns a memoized value and 
// useCallback returns a memoized function.
// useCallback Hook only runs when one of its dependencies update.
// This can improve performance.


//the child component had stopped calling when we used memo
//but when we applied the props of decrement to it again beagan to call
