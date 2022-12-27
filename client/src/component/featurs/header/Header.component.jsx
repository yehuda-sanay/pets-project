import { Link } from 'react-router-dom';
import React,{useState} from "react";
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { authActions } from '../../../redux/store';
axios.defaults.withCredentials= true


export default function Header(){
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state=> state.isLoggedIn)
const sendLogoutReq = async ()=>{
  const res = await axios.post("http://localhost:8080/users/logout",null,{
      withCredentials:true
    });
    if(res.status === 200){
      return res
    }
    return new Error("Unable To Logout. Please try again")
}
  const handleLogout =()=>{
    sendLogoutReq().then(()=> dispatch(authActions.logout()))
  }

  console.log(isLoggedIn);
  const [value, setValue] = useState();
      return (
        <div>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h3">VET-TECH</Typography>
              <Box sx={{ marginLeft: "auto" }}>
                <Tabs
                  indicatorColor="secondary"
                  onChange={(e, val) => setValue(val)}
                  value={value}
                  textColor="inherit"
                >
                      {!isLoggedIn && <>                  
                      <Tab to="/login" LinkComponent={Link} label="Login" />
                      <Tab to="/signup" LinkComponent={Link} label="Signup" /></>}
                      {isLoggedIn &&(
                      <Tab onClick={handleLogout} to="/" LinkComponent={Link} label="Logout" />
                      )}{""}
                </Tabs>
              </Box>
            </Toolbar>
          </AppBar>
        </div>
      );
    }

//     import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

    // <Navbar bg="primary" expand="lg" variant='dark'>
    //   <Container>
    //     <Navbar.Brand>
    //       <Link to='/'>VET-TECH</Link>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //         <Nav className='m-auto'>
    //         <Form className="d-flex">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //       </Form>
    //         </Nav>
    //       <Nav
    //         className="my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="/profile">
    //         <Link to='/profile'>My Pets</Link>
    //         </Nav.Link>
    //         <NavDropdown title="Yehuda" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action4">My Profile</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action5">
    //             Logout
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  

