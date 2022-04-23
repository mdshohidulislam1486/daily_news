import { TrySharp } from '@mui/icons-material'
import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { setInterval } from 'timers/promises'
import './Home.css'


interface NewsObject {
  
}

const Home:React.FC = ()  => {
  const [news, setNews] = useState<any[]>([])

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search_by_date?query=10')
    .then(res =>{ if(!res.ok){
      throw Error('No weather data found, please check again')
    }
    return res.json()
    })
    .then(data =>{
      setNews(data.hits)
    }) 
    .catch(err => {
      console.log(err.message);
    }); 
  
  }, [])

  console.log(news)
  
  return (
    <Box className='home_bg'>
      <Typography variant='h3' sx={{textAlign:'center', fontWeight:600, py:5}}>Latest News</Typography>
      <Container>
        {
            news?.map(n => (<Grid container key={n?.objectID}>
              <Grid item>
                {n.created_at.slice(0,10)}
              </Grid>
            </Grid>))
        }
      </Container>
    </Box>
  )
}

export default Home