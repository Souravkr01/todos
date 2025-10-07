import React from 'react'
import header from '../assets/header.jpg'
const Header = () => {
  return (
    <>
    <div className='header-image-container'> 
        <img src={header} className='header-image' alt="Daily Goals"/>
      </div>
    <nav>DON'T DECREASE THE GOAL, INCREASE THE EFFORT, YOU CAN DO MORE THAN YOU THINK</nav>
    </>
  )
}

export default Header