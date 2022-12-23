import './UserProfile.css'
// import AllCards from '../../featurs/cards/AllCards';
import { MainScreen } from '../../featurs/MainScreen/MainScreen';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';


export default function UserProfile() {
  return (
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
  );
}