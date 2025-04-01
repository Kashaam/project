import React, { createContext, useState } from 'react'
export const UserContext = createContext();

const Context = (props) => {
    const[users, setUsers] = useState([
        {name:"Ramesh", address: "Kathmandu", id:102},
        {name:"Raghav", address: "Dharan", id: 103},
        {name:"Melina", address: "Darjeeling", id: 104},
        {name:"Sushant", address: "Tokyo", id: 105},
        {name:"Uma", address: "Butwal", id: 106},
        {name:"John", address: "Dharan", id: 107},
    ])
  return (
   <UserContext.Provider value={{users, setUsers}}>
    {props.children}
   </UserContext.Provider>
  )
}

export default Context
