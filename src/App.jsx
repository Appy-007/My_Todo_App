import { useState,useEffect } from 'react'
import {TodoProvider} from './context/todoContext'
import { ThemeProvider} from './context/themeContext'
//import { useTheme } from './context/themeContext'
import Form from './components/Form'
import Items from './components/Items'
import { MdOutlineLightMode } from "react-icons/md";

function App() {
 
  const [todos,setTodos]=useState([])

  const [currentTheme,setCurrentTheme]=useState('light');
  const lightTheme=()=>{
    setCurrentTheme('light');
  }
  const darkTheme=()=>{
    setCurrentTheme('dark');
  }
    

  const addTodo=(todo)=>{
    setTodos((prev)=>[
      ...prev,{id:Date.now(),...todo}
    ])
  }

  const updateTodo=(id,todo) =>{
    setTodos((prev)=> prev.map((prevtodo)=> (prevtodo.id===id ? todo : prevtodo)))
  }

  const deleteTodo=(id) =>{
    setTodos((prev) => prev.filter((prevtodo)=>prevtodo.id !== id))
  }

  const toggleComplete =(id) =>{
    setTodos((prev)=> prev.map((prevtodo)=>(prevtodo.id===id ? {...prevtodo,completed:!prevtodo.completed} : prevtodo)))
  }

  useEffect(() =>{
    const todoItems=JSON.parse(localStorage.getItem('todos'))
    if(todoItems && todoItems.length>0){
    setTodos(todoItems)
    }

  },[])

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(currentTheme)

  },[currentTheme])

  useEffect(() =>{
    localStorage.setItem('todos',JSON.stringify(todos))

  },[todos])

  const changeTheme=(e)=>{
    e.preventDefault()
    if(currentTheme==='light'){
      darkTheme()
    }
    else{
      lightTheme()
      
    }

  }

  return (
    <ThemeProvider value={{currentTheme,lightTheme,darkTheme}}>
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
    <>
    <div className='h-full dark:bg-black'>
    <h1 className="  h-15 text-3xl text-center py-2 pb-2 dark:bg-black dark:text-yellow-500">To Do App </h1>
    <button
    className='text-3xl py-2 mx-5'
    onClick={changeTheme}
    ><MdOutlineLightMode className=' bg-slate-400 text-5xl p-1 dark:bg-black dark:text-yellow-500' /></button>
    <Form/>
    <div className="flex flex-col dark:bg-black">
      {todos.length>0 && todos.map((todo)=>(
        <div key={todo.id}>
          <Items todo={todo}/>
        </div>
      ))}
    </div>

    </div>
    </>
    </TodoProvider>
    </ThemeProvider>
  )
}

export default App
