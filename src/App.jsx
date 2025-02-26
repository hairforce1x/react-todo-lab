import { useState, useReducer } from 'react'
import './App.css'
import Heading from './modules/Heading'
import List from './modules/List'
import initialState from './data'

function reducer(tasks, action){
  switch (action.type) {
    case 'add': {
      return console.log('added')
    }
  }
      throw Error('danger will robinson')   
}

export default function AddTasks() {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  function handleAdd(text) {
    dispatch({type: 'add', text: text})
  }

  return (
    <>
      <Heading />
      <List
        tasks={tasks}
        handleAdd={handleAdd}
      />
    </>
  )
}


// export default App
