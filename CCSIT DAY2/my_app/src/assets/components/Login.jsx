import { TextField, Button } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <TextField label="Username" variant="outlined" />
            <br />
            <br />
            <TextField label="Password" variant="outlined" />
            <br/>
            <br/>
            <Button variant="contained">Login</Button>  <br />
        </div>
    );
}

export default Login;