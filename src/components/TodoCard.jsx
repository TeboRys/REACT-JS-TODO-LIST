import React, {useState} from 'react'
import {useEffect} from 'react'

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props; //destructuring


  return (
    <li className='todoItem'> 
    {/* to wrap each item in list tage */}
      {children}
      
      
      <div className='actionsContainer'>
      <button onClick={() => {
        handleEditTodo(index) 
      }}
      ><i className="fa-solid fa-pen-to-square"></i></button>

      <button onClick={() => {
        handleDeleteTodo(index) 
      }}
      ><i className="fa-solid fa-trash"></i></button>

      <button><i className="fa-solid fa-check"></i> </button>       
        
        

      </div>
      

    </li>
  )
}
