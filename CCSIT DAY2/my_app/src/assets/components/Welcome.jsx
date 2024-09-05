import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Welcome = () => {
        const [val,setval] = useState()
        const submitHandler1= () => {
        setval("NIHALA")
        }
      const submitHandler2 = () => {
        setval("NAFIYA")
    }
        
    const submitHandler = () => {
        setval("AMINA")
    }
    useEffect (() => {
        submitHandler2()
    },[])
  return (
      <div>
          <br /><br />
          <Typography variant='h4'>welcome {val}</Typography>
          <br /><br />
          <Button variant="contained" onClick={submitHandler1}>NIHALA</Button>&nbsp;
          <Button variant="contained" onClick={submitHandler2}>NAFIYA</Button>&nbsp;
          <Button variant="contained" onClick={submitHandler}>AMINA</Button>

    </div>
  )
}

export default Welcome