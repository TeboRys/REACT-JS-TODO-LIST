import {useState} from "react"; // importing useState from react to manage state

export default function TodoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props // destructuring to get handleAddTodos from props
    //const [todoValue, setTodoValue] = useState('') // state to hold the input value

    return(
        <header>
            <input 
            value={todoValue}
            onChange={(e) => {setTodoValue(e.target.value)}} 
            placeholder="add a todo . . ."/>

            <button onClick = {() => {
                handleAddTodos(todoValue)
                setTodoValue('')
                }}>Add Todo</button>
        </header>
    )

}

// in react, components communicate down to the child so if same level components what acces to the same data, we need to lift the state up to the parent component
// in this case, TodoInput and TodoList are siblings so we need to lift the state up to the parent component which is App.jsx