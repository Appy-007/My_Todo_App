import { useState } from "react"
import { useTodo } from "../context/todoContext"

function Form(){
    const [todoItem,setTodoItem]=useState('')
    const {addTodo}=useTodo();

    const addItem=(e)=>{
        e.preventDefault()
        if(!todoItem) return
        addTodo({title:todoItem,completed:false})
        setTodoItem('')
        
    }
    return (
        <div className="">
        <form className="flex gap-1 items-center justify-center my-10 dark:bg-black" onSubmit={addItem}>
            <input
            type="text"
            placeholder="Type here"
            value={todoItem}
            className="py-2 px-1 rounded-md border border-black min-w-56 outline-none dark:text-white dark:bg-slate-500"
            onChange={(e)=>{
                setTodoItem(e.target.value)
            }}
            
            />
            <button type="submit" className="bg-slate-500  px-3 rounded-md py-1 my-2 dark:bg-blue-600 dark:text-white ">Add</button>
        </form>
        </div>
    )
}

export default Form