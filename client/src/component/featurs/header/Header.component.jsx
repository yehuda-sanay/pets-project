import { Link } from 'react-router-dom';
import React,{useState} from "react";
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";


export default function Header(){
  const [value, setValue] = useState();
      return (
        <div>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h3">MernAuth</Typography>
              <Box sx={{ marginLeft: "auto" }}>
                <Tabs
                  indicatorColor="secondary"
                  onChange={(e, val) => setValue(val)}
                  value={value}
                  textColor="inherit"
                >
                      <Tab to="/login" LinkComponent={Link} label="Login" />
                      <Tab to="/register" LinkComponent={Link} label="Register" />
                      <Tab to="/profile" LinkComponent={Link} label="Profile" />
                      <Tab to="/" LinkComponent={Link} label="Home" />
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
  

