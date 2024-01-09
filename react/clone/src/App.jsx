import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className = "page-container">
      <nav className = "nav-bar">
        <img src = "../public/blob.svg" className = "logo" />
        <h1 className = "clone-name" >Clone Name</h1>
        <ul className = "menu">
          <li className = "menu menu-items">Home</li> 
          <li className = "menu menu-items">Categories</li>
          <li className = "menu menu-items">Settings</li>
        </ul>
      </nav>
      <div className = "banner-container">
        <ul>
          <li className = "banner-1"></li>
          <li className = "banner-2"></li>
          <li className = "banner-3"></li>
        </ul>
      </div>


    </div>
  )
}


