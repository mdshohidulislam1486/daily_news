import { TrySharp } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { setInterval } from 'timers/promises'
import './Home.css'


interface NewsObject {
  
}

const Home:React.FC = ()  => {
  const [news, setNews] = useState<any[]>([])
  const [loding , setLoding] = useState(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [postPerPage, setPostPerPage] = useState<number>(10)

  useEffect(() => {
    const fetchPosts = async () =>{
      setLoding(true)
      const res = await 
    }
  
  }, [])

  console.log(news)
  
  return (
    <Box className='home_bg'>
      <Typography variant='h3' sx={{textAlign:'center', fontWeight:600, py:5}}>Latest News</Typography>
      <Container sx={{display:"flex", flexWrap:'wrap', justifyContent:"center"}}>
      <TableContainer>
              <Table>
                <TableHead>
                  <TableRow data-aos="zoom-in-down">
                  <TableCell><strong>Title</strong></TableCell>
                  <TableCell><strong>Created at</strong></TableCell>
                  <TableCell><strong>author</strong></TableCell>
                  <TableCell><strong>Link Orginated</strong></TableCell>
                  
                  </TableRow>
                </TableHead>

               {news?.map((n) =>  <TableBody key={n._id}>
                  <TableRow data-aos="zoom-in-down">
                      <TableCell>{n?.story_title}</TableCell> 
                      <TableCell>{n?.created_at.slice(0,10)}</TableCell> 
                      <TableCell>{n?.author} </TableCell> 
                      <TableCell sx={{cursor:'pointer', color:'#0000FF'}} ><a style={{textDecoration:'none'}} href={n?.story_url}><strong>Find Story Link</strong></a></TableCell>
                     
                      

                  </TableRow>
                </TableBody>)}
              </Table>
            </TableContainer>

      </Container>
    </Box>
  )
}

export default Home