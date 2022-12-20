import './Register.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Register() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="firstName"
          label="first name"
          defaultValue=""
          helperText=""
        />
      </div>
      <div>
        <TextField
          id="lastName"
          label="last name"
          defaultValue=""
          helperText=""
        />
      </div>
      <div>
        <TextField
          id="email"
          label="email"
          defaultValue=""
          helperText=""
        />
      </div>
      <div>
        <TextField
          id="password"
          label="password"
          defaultValue=""
          helperText=""
        />
      </div>
    </Box>
  );
}