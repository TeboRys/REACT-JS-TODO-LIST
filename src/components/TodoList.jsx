import React, {useState} from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos} = props; // destructuring to get todos from props   


    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}
                    >
                        {todo}
                    </TodoCard>
                )
            })}
        </ul>
    )
}

// . . . spread operator to pass all props to TodoCard
// we can also pass individual props like <TodoCard todo={todo} index={todoIndex} />
// but using spread operator is more convenient when passing multiple props

//hence passing in a prop as an attribute to the component allows data to flow from parent to child
// in this case, TodoList is the parent component and TodoCard is the child component
// so we can pass props from TodoList to TodoCard using spread operator
// this allows us to access the props in TodoCard component