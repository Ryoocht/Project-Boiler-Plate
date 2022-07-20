import React from 'react'
import MyLoading from './components/atoms/MyLoading'
import MySnackbar from './components/atoms/MySnackbar'

function App() {
  return (
    <div className="App">
      <MySnackbar position='bottom_left' timeout={10000}/>
    </div>
  )
}

export default App
