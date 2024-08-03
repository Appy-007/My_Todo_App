/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useTodo } from "../context/todoContext";
import { useState } from "react";




function Item({todo}){
    const [updatedTodoItem,setUpdatedTodoItem]=useState(todo.title)
    const [isEditable,setIsEditable]=useState(false)
    const {deleteTodo,updateTodo,toggleComplete}=useTodo()

    const editTodo= ()=>{
        updateTodo(todo.id,{...todo,title:updatedTodoItem})
        setIsEditable(false)
        
    }

    const deleteItem  =()=>{
        deleteTodo(todo.id)
    }

    const strikeThrough =()=>{
        toggleComplete(todo.id)
    }


    return (
        <div className="flex items-center justify-center bg-violet-400 min-w-56 max-sm:mx-3 mx-60 rounded-md gap-2 mb-5 px-1 dark:bg-slate-500">
        <input type="checkbox"
         className="cursor-pointer"
         checked={todo.completed}
         onChange={strikeThrough}
         
         />
        <input
        type="text"
        readOnly={!isEditable}
        className={`bg-violet-400 border border-teal-900 rounded-md py-2 px-1 my-1 w-4/5 dark:bg-slate-500 dark:text-white ${todo.completed?"line-through" :""}`}
        value={updatedTodoItem}
        onChange={(e)=>{
           e.preventDefault()
            setUpdatedTodoItem(e.target.value)
        }}

        />
        <button onClick={(e)=>{
            e.preventDefault()
            if(todo.completed)
                return
            if(isEditable){
                editTodo()
            }
            else{
                setIsEditable((prev)=>!prev)
            }
                

        }}
        disabled={todo.completed}><MdEdit size={25} className="dark:text-white"/></button>
        <button onClick={deleteItem}><MdDelete size={25}  className="dark:text-white"/></button>
        </div>
    )
}

export default Item