import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.css'
export default function Nav() {
  return (
    <>
     
     <div className='nav'>
      <ul className='unOrderList'>
        <Link className='list' to="/">Home</Link>
        <Link className='list' to="/about">About</Link>
        <Link className='list' to="/register">Register</Link>
        <Link className='list' to="/contact">Contact</Link>
      </ul>
     </div>
    </>
  )
}
