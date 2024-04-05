import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  

  return (
    <>
    <div className='container'>
      <span className='mode'>online</span>
      <img className='img' src="./src/img1.jpg" alt="" />
      <h3>{props.name}</h3>
      <h4>{props.city}</h4>
      <p>{props.job_role}</p>
      <div className='btns'>
        <button className='btn btn1'>message</button>
        <button className='btn btn2'>follow</button>
      </div>
      <div className='skill'>
        <h5>skills</h5>
        <ul>
          {
            props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))
          }
        </ul>

      </div>
    </div>
      
      
    </>
  )
}

export default App
