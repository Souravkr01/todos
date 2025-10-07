import React, {useEffect, useState} from 'react'
import Task from './Task'


const Home = () => {
  const initialArray = localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[]
  const [tasks, setTasks] = useState(initialArray)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, {
      title:title,
      description:description
    }])
    setTitle("")
    setDescription("")
  }
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
    
  },[tasks])
  const deleteTask = (index) =>{
    const filteredArr = tasks.filter((val, i)=>{
      return i!==index
  })
  setTasks(filteredArr)
  }
  return (
    <div className='container'>
      <h1>Daily Goals</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <textarea placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <button type="submit">Add</button>
        </form>
        {tasks.map((item, index)=>(
          <Task title={item.title} description={item.description} key={index}
              deleteTask={deleteTask} index={index}
          
          />
        ))}
    </div>
  )
}

export default Home