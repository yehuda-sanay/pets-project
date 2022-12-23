import {Route, Routes} from 'react-router-dom'
import {Home,LogIn,Register,UserProfile,AddPet,PetInfo} from "./component/pages/index"
import PetsProvaider from './contexts/PetsProvaider'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Routing(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='logIn' element={<LogIn/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='addPet' element={<AddPet/>}/>
            <Route path='petInfo' element={<PetInfo/>}/>
            <Route path='profile' element={<PetsProvaider><UserProfile/></PetsProvaider>}/>
        </Routes>
    )
}