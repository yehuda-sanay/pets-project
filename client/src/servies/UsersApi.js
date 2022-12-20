const API_STRING="http://localhost:8080/users"
export default function getUsersApi(){
    try {
        return  fetch(API_STRING).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}