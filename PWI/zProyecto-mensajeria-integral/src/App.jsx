import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactScreen from './Pages/ContactScreen/ContactScreen'
import ChatScreen from './Pages/ChatScreen/ChatScreen'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ContactScreen/>}/>
        <Route path='/ChatScreen/:userId' element={<ChatScreen/>}/>
      </Routes>
    </>
  )
}

export default App
