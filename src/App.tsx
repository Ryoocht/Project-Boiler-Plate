import React from 'react'
import MyLoading from './components/atoms/MyLoading'

function App() {
  return (
    <div className="App">
      <MyLoading type='button' shape='circle'/>
      <MyLoading type='button' shape='bars'/>
      <MyLoading type='button' shape='cradle'/>
      <MyLoading type='button' shape='dots'/>
      <MyLoading type='button' shape='wave'/>
      <MyLoading type='button' shape='spinner'/>
    </div>
  )
}

export default App
