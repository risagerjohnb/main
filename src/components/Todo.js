import './Todo.css'

export default function Todo({ todo }) { //task, completebtn
    return (
        <div className='tododiv'>
            {todo.task} {/*Printer todo ud */}
            <button className='completebtn'>COMPLETE</button> {/*Printer den ud sammen */}
        </div>
    )
}