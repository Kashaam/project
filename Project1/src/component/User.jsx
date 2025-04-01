import React, { useContext } from 'react'
import {Link } from "react-router-dom"
import { UserContext } from '../utils/Context'

const User = () => {
  const {users}= useContext(UserContext)
  return (
    <div className='w-1/2 m-auto  mt-20 p-4'>
    <h1 className='font-semibold text-5xl text-red-300'>User</h1>
    <div className='mt-4 flex flex-col p-2'>
      {users.map((u)=>{
        return <Link key ={u.id} to={`/user/${u.id}`} className="font-semibold text-sm bg-red-200 p-2 rounded mb-2">{u.name}</Link>
      })}
        
    </div>
</div>
  )
  
}

export default User
