import React from 'react'
import {NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <nav className='bg-blue-300 flex gap-20 justify-center py-2 text-sm font-semibold'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  )
}

export default Nav
