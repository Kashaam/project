import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../component/Home'
import User from '../component/User'
import About from '../component/About'
import UserDetails from '../component/UserDetails'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Routing
