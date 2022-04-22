import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import './Home.css'



const Home = () => {
  return (
    <Box className='home_bg'>
      <Typography variant='h3' sx={{textAlign:'center', fontWeight:600, py:5}}>Latest News</Typography>
      <Container> </Container>
    </Box>
  )
}

export default Home