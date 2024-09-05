import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <h1 align="center">Signup Page</h1>
          <TextField label="Username" variant="filled"></TextField>
          <br></br>
          <br></br>
          <TextField label="Password" variant="filled" /> 
          <br></br>
          <br></br>
          <Button variant="contained">SignUp</Button>  <br />
    </div>
  )
}

export default Signup