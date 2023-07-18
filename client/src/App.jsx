
import { useState } from 'react'
import './App.css'
import ChatBody from './components/ChatBody'
import ChatInput from './components/ChatInput'
// () ${}
function App() {

  const [chat,setChat]= useState([])

  return (
    <div className='bg-[#1A232E] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between align-middle'>
      <div className='gradient-01 z-0 absolute'></div>
      <div className='gradient-02 z-0 absolute'></div>
      {/* header */}
      <div className='uppercase font-bold text-2xl text-center mb-3'>Mini ChatGPT</div>

      {/* body  */}

      <div className='h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center'>
        <ChatBody></ChatBody>
      </div>
      <div className='w-full max-w-4xl min-w[20rem] self-center'>
        <ChatInput></ChatInput>
      </div>

    </div>
  )
}

export default App
