import './Todo.css'

export default function Todo({ todo }) { //task, completebtn
    
    return (
        <div className='tododiv'>
            {todo.task} 
            <button className='completebtn'>COMPLETE</button>
        </div>
    )
}