/* eslint-disable no-unused-vars */
import { createContext,useContext } from "react";

const todoContext=createContext({
    todos:[
        {
            id:1,
            title:"Todo Title",
            completed:false
        },

    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{},
})



const TodoProvider=todoContext.Provider
const useTodo=()=>(
    useContext(todoContext)
)
export  {useTodo,todoContext,TodoProvider}

