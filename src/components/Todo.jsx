import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../../public/assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = () => {

 const [todoList, setTodoList] = useState(localStorage.getItem("todos")? 
   JSON.parse(localStorage.getItem("todos")) : []);

 const Task = useRef();

 const add = () => {
    const Taskadded = Task.current.value.trim();
    
    if (Taskadded === ""){
           return null;
    }else{
        
        const newTodo = {
            id: Date.now(),
            text: Taskadded,
            isComplete: false,
        }
    
        setTodoList((prev) => [...prev, newTodo]);

        Task.current.value = '';

    }

 }

const deleteTodo = (id) => {
       setTodoList((prvTodos) => {
          return prvTodos.filter((todo) => todo.id !== id);
       })
}

const toggle = (id) => {
      setTodoList((prevTodos) => {
        return  prevTodos.map((todo) => {
            if(todo.id === id){
                 return {...todo, isComplete: !todo.isComplete};
            }
            return todo;
        })
      })
}

useEffect(()=>{
   localStorage.setItem("todos", JSON.stringify(todoList));
}, 
[todoList]);

  return (
    <div className="bg-white place-self-center max-w-11/12  flex flex-col p-5 sm:p-7 min-h-[400px] rounded-xl">

       
      {/* ------ title ------- */}

      <div className="flex items-center mt-7 gap-0.5">
        <img className="w-8" src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>

      {/* ------ input box ------- */}

      <div className='flex items-center my-7 min-[350px]:my-2 bg-gray-200 rounded-full'>
        <input ref={Task} className="bg-transparent border-0 outline-0 
        flex-1 h-14 pl-6 pr-2 max-[380px]:px-1 max-[380px]:text-sm max-[380px]:h-10 max-[380px]:w-full placeholder:text-slate-600" 
        type="text" placeholder='Add your task'/>
        
        <button  onClick={() => add()} className='border-none rounded-full bg-green-600 
        w-32 max-[380px]:w-12 max-[380px]:text-xs max-[380px]:h-10 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
      </div>

      {/* ------ todo list ------- */}

      <div>
        {todoList.map((item, index) => {
            return <Todoitems key={index} text={item.text} 
            id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
        })}
      </div>

    </div>
  )
}

export default Todo;