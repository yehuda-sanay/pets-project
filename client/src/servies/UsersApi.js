const API_STRING="UsersApi"
export default function getUsersApi(){
    try {
        return  fetch(API_STRING).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}