import './TodoForm.css'
import logo from '../images/todolistlogo.png'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'                 //laver et id hver gang der kommer en ny todo

export default function TodoForm( {addTodo} ) { 
    const [todo, setTodo] = useState({              //todo:old input, setTodo:new input
        id: "",
        task: "",
    });
    
    function handleTaskInputChange(e) {             //opdatering af todolisten
        setTodo({ ...todo, task: e.target.value })  //todo: old input, task: new input
    }
    
    function handleSubmit(e) {
        e.preventDefault();                     //så den ikke sletter brugerens input
        if (todo.task.trim()) {                 //trim() sletter white space 
            addTodo({ ...todo, id: uuidv4() }); //calling new addTodo function that has the todo spread on to it, with a new updated id prop
            setTodo({ ...todo, task: ""});      //resetter form til blank, updated task prop with an empty string
        }
    }

    return ( 
        <form className="list" onSubmit={handleSubmit}> 

            <img
                alt="logo" 
                src={logo} //den blå img
                className="logo"
            />

            <h3 className='thelist'>The List</h3> 

            <input 
                type="text" 
                placeholder="Type your todos" 
                value={todo.task}                   //value er brugerens input
                onChange={handleTaskInputChange}    //event kører når man skriver på text
            />

        </form> 
    )
}