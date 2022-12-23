import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import LockOutlinedIcon from '@mui/material/LockOutlinedIcon';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';

const SingIn=()=>{
    
    const sxStyle= { my: 3 }
    const paperStyle={padding :20,height:'70vh',width:300, margin:"20px auto"}
    // const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     {/* <Avatar style={avatarStyle}><LockOpenIcon/></Avatar> */}
                    <h2>Sign In</h2>
                </Grid>
                <TextField sx={sxStyle} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField sx={sxStyle} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button sx={sxStyle} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography sx={sxStyle} >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography sx={sxStyle} > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SingIn


// import React, { useState, useEffect } from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Loading from "../../components/Loading";
// import ErrorMessage from "../../components/ErrorMessage";
// import { login } from "../../actions/userActions";
// import MainScreen from "../../components/MainScreen";
// import "./LoginScreen.css";

// function LoginScreen({ history }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { loading, error, userInfo } = userLogin;

//   useEffect(() => {
//     if (userInfo) {
//       history.push("/mynotes");
//     }
//   }, [history, userInfo]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(login(email, password));
//   };

//   return (
//     <MainScreen title="LOGIN">
//       <div className="loginContainer">
//         {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
//         {loading && <Loading />}
//         <Form onSubmit={submitHandler}>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//         <Row className="py-3">
//           <Col>
//             New Customer ? <Link to="/register">Register Here</Link>
//           </Col>
//         </Row>
//       </div>
//     </MainScreen>
//   );
// }

// export default LoginScreen;