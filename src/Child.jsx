import React, {memo} from 'react'

const Child = (decrement, setDecrement) => {
    console.log("Child component rendered")
  return (
    <div>
      <h1>This is child component</h1>
    </div>
  )
}

export default memo(Child)

// -> Initially(first time) all the compoents are loaded so child will be shown in console
// -> but after that also child is contiuosly printed in console
// -> this is unwanted component loading
// -> to oversome this we use memo function from react
//-> good code practices
//->this is optimization