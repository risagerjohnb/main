import Todo from './Todo' //passed in as a prop

export default function Todolist({ todos }) { //destructure todos
    
    return (
        <ul>
            {todos.map(todo => (
                <Todo               
                    key={todo.id}   //man skal lave en key ellers opstår en fejl
                    todo={todo}     
                    /> 
            ))}
        </ul>
    );  
}