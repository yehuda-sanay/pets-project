import {Route, Routes} from 'react-router-dom'
import {Home,LogIn,Register,Profile} from "./component/pages/index"


export default function Routing(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='logIn' element={<LogIn/>}/>
            <Route path='Register' element={<Register/>}/>
            <Route path='Profile' element={<Profile/>}/>
        </Routes>
    )
}