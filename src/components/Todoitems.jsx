import React from 'react'
import tick from '../../public/assets/tick.png'
import not_tick from '../../public/assets/not_tick.png'
 import delete_icon from '../../public/assets/delete.png'

const Todoitems = ({ text, id , isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        
        <div onClick={() => toggle(id)} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : not_tick} alt="" className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] max-[380px]:text-sm 
                ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>

        <img onClick={() => deleteTodo(id)} src={delete_icon} alt="" className='w-4 cursor-pointer'/>
    </div>
  )
}

export default Todoitems