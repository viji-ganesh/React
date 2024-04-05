import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App name='vijayalakshmi ' city='Bangalore' job_role='React JS developer' skills={['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Git & Github','React']}/>
    
  </React.StrictMode>,
)
