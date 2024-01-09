import { useState } from 'react'
import reactLogo from './assets/react-logo.png'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  return (
    <>
    <div className = "container">
      <img src = {viteLogo}className = "logo" />
        <h1>Cards</h1>
      <ul className = "list-container">
        <li className = "material-symbols-outlined" onclick="../index.html">Home</li>
        <a className = "material-symbols-outlined" href = "https://github.com/Rukutodo" target="_blank" >Dataset</a>
      </ul>

    </div>
    <div className = "cards-container">

        <ul className = "image-container">

         <li className = "bg bg-1"></li>
         <li className = "bg bg-2"></li>
         <li className = "bg bg-3"></li>
        
       

        </ul>

    </div>

      
      
      

    </>
  )
}


