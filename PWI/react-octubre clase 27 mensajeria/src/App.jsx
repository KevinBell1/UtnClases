import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ChatScreen, ContactScreen } from './Pages'


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
