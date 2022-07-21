import React from 'react'
import MySnackbar from './components/atoms/MySnackbar'

function App() {
  return (
    <div className="App">
      <MySnackbar position='top_left' timeout={5000}/>
    </div>
  )
}

export default App
