import './UserProfile.css'
import { MainScreen } from '../../featurs/MainScreen/MainScreen';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useEffect,useState } from 'react';
import PetCard from '../../featurs/cards/AllCards'
import { Container, Grid } from '@mui/material';

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
console.log(user?.pets);

  return (
    <div>

    <MainScreen style={{ margin:50,marginTop:10, marginBottom: 6}} title={`welcome back ${user?.firstName} ${user?.lastName}`}>
      <Container>
      <Grid container>
        {user?.pets.map(items =>(
        <Grid style={{ margin:70,marginLeft:10, marginBottom: 6}} item key={items.id} xs={12} md={6} lg={4}>
       <PetCard pets={items}/>
      </Grid>
        ))}
      </Grid>
      </Container>
  
    </MainScreen>
    </div>
  );
}