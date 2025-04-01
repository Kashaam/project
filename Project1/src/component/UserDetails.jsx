import React, { useContext } from 'react'
import { UserContext } from '../utils/Context';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const {id } = useParams()
  const {users} = useContext(UserContext);
  const navigate = useNavigate();

  const detail = users.find(u=>u.id === parseInt(id) || null)
  return (
    <div className='h-screen w-full bg-slate-300 flex justify-center items-center'>
      <div className='bg-zinc-200 rounded-lg p-4 drop-shadow-2xl'>
      <h1 className='text-5xl font-bold text-red-300 font-[gilroy]'>{detail.name}</h1>
      <h3 className="text-lg font-semibold font-sans">{detail.address}</h3>
      <button onClick={()=>navigate("/user")} className='px-3 py-2 bg-blue-800 rounded-md text-white text-sm font-semibold mt-4 cursor-pointer'>Go back</button>
      </div>
     
    </div>
  )
}

export default UserDetails
