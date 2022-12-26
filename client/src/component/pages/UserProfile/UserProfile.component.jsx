import './UserProfile.css'
import { MainScreen } from '../../featurs/MainScreen/MainScreen';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useEffect,useState } from 'react';
import PetCard from '../../featurs/cards/AllCards'
axios.defaults.withCredentials = true;
let firstRender= true;

export default function UserProfile() {
  
  const [user, setUser] = useState();

  const refreshToken = async ()=> {
    const res = await axios.get("http://localhost:8080/users/refresh", {
      withCredentials: true,
    })
    .catch((err) => console.log(err))

    const data = await res.data;
    return data;
  }

  const sendRequest = async () => {
    const res = await axios.get('http://localhost:8080/users/user',{
      withCredentials:true,
    }) 
    .catch(err=>console.log(err))
    const data= await res.data;
    return data
  }
useEffect(() => {
  if (firstRender) {
    firstRender = false;
    sendRequest().then((data) => setUser(data.user))
  }
  let interval = setInterval(() => {
    refreshToken().then(data=>setUser(data.user))
  }, 1000 * 29)

  return ()=> clearInterval(interval);
}
,[]
)
console.log(user);
console.log(user?.firstName);

  return (
    <div>
      <PetCard/>

      { user && <h1>{user?.firstName}</h1>}
    <MainScreen title='welcome back Yehuda Sanay'>
      <Link to='createpet'>
      <Button style={{marginLeft:10, marginBottom: 6}} size='lg'>
        Add New Pet
      </Button>
      <Card style={{ margin:10}}>
        <Card.Header style={{display:'flex'}}>
          <span
          style={{
            color:'black',
            textDecoration:'none',
            flex:1,
            cursor:'pointer',
            alignSelf:'center',
            fontSize:18,
          }}
          >title</span>
          <div>
            <Button>Edit</Button>
            <Button variant='danger' className='mx-2'>Delete</Button>
          </div>
        </Card.Header>
      </Card>
      </Link>
    </MainScreen>
    </div>
  );
}