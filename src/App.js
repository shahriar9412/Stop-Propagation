import React from 'react'

const App = () => {

  const handleParentClick = (event) => {
    console.log("parent event:", event)
  }
  const handleChildClick = (event) => {
    event.stopPropagation()
    console.log("child event:", event)
  }

  return (
    <div style={{ backgroundColor: "lightblue" }} onClick={handleParentClick}>
      <h1>welcome</h1>
      <button onClick={handleChildClick}>click me</button>
    </div>
  )
}
export default App
