import {createContext, useEffect, useState } from "react"
import getUsersApi from "../servies/UsersApi";

export const UsersContext= createContext()

export default function UsersProvaider({children}){
    

    const [Users, setUsers]=useState([]);
    useEffect(()=>{
        getUsersApi().then(res=>setUsers(res))
        
    },[])

    return(
        <UsersContext.Provider value={{Users, setUsers}}>
            {children}
        </UsersContext.Provider>
    )
}