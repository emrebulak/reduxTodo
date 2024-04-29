import React from 'react'
import Form from './components/Form'
import List from './components/List'

const App = () => {
  return (
    <div className='bg-gray-700 h-screen text-white w-full'>
      <h1 className='text-center text-3xl py-4'>Redux <span className='text-yellow-400 font-bold'>Todo</span></h1>
      <Form />
      <List />
    </div>
  )
}

export default App