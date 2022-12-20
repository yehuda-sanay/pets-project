const API_STRING="http://localhost:8080/pets"
export default function getPetsApi(){
    try {
        return  fetch(API_STRING).then(res=>res.json())
        
    } catch (error) {
        console.log(error)
    }
}