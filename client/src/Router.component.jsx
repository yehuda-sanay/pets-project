import {Route, Routes} from 'react-router-dom'
import {Home,LogIn,Signup,UserProfile,AddPet,PetInfo} from "./component/pages/index"
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Routing(){
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='login' element={<LogIn/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='addPet' element={<AddPet/>}/>
            <Route path='petInfo' element={<PetInfo/>}/>
           {isLoggedIn && <Route path='profile' element={<UserProfile/>}/>}{" "}
        </Routes>
    )
} 