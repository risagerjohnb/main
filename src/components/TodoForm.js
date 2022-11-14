import './TodoForm.css'
import logo from '../images/todolistlogo.png'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid' //creates an unique id everytime a todo is added

export default function TodoForm( {addTodo} ) { 
    const [todo, setTodo] = useState({
        id: "",
        task: "",
    });
    
    function handleTaskInputChange(e) { //updates task prop on our todo object
        setTodo({ ...todo, task: e.target.value }) //todo: old input, task: new input
    }
    
    function handleSubmit(e) {
        e.preventDefault(); //to prevent default submit functionality
        if (todo.task.trim()) { //trim() removes white space from the string of todo.task
            addTodo({ ...todo, id: uuidv4() }); //calling new addTodo function that has the todo spread on to it, with a new updated id prop
            setTodo({ ...todo, task: ""}); //resets the form with the old prop, updated task prop with an empty string
        }
    }

    return ( //onSubmit runs everytime the form is submitted 
        <form className="list" onSubmit={handleSubmit}> 

            <img
                alt="logo" 
                src={logo} 
                className="logo"
            />

            <h3 className='thelist'>The List</h3> 

            <input 
                type="text" 
                placeholder="Type your todos"
                title="task"
                value={todo.task} // current value thats being typed cause that is whats being updated everytime the handleTask is being called
                onChange={handleTaskInputChange} //event fires everytime input is being typed
            />

        </form> 
    )
}