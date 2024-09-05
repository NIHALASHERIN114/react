import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [Counter,setCounter] = useState(0)
    const SubmitHandler = () => {
        setCounter(Counter + 1)
    }
    const TakeInput = () => {
    setCounter(Counter - 1)
    }
    
  return (
      <div>
          <br /><br />
          <Typography variant="h3">Count:{ Counter}</Typography>
          <br /><br />
          <Button variant="contained" color="success" onClick={SubmitHandler} >+</Button>
          &nbsp; &nbsp;
          <Button variant="contained" color="error" onClick={TakeInput} >-</Button>
    </div>
  )
}

export default Counter