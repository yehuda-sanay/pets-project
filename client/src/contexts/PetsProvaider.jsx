import {createContext, useEffect, useState } from "react"
import getPetsApi from "../servies/PetsApi";

export const PetsContext= createContext()

export default function PetsProvaider({children}){
    

    const [Pets, setPets]=useState([]);
    useEffect(()=>{
        getPetsApi().then(res=>setPets(res))
        
    },[])

    return(
        <PetsContext.Provider value={{Pets, setPets}}>
            {children}
        </PetsContext.Provider>
    )
}