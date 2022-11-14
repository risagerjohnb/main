import Todo from './Todo' //passed in as a prop

export default function Todolist({ todos }) { //destructure todos
    
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} /> //rendering from an array map, each item needs a unique key returned from the map
            ))}
        </ul>
    );  
}