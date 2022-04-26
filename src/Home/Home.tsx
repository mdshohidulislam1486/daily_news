import { TrySharp } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { setInterval } from 'timers/promises'
import './Home.css'
import Pagination from './Pagination'
import { fetchNesData } from './apiEndPoint'




const Home:React.FC = ()  => {
  const [news, setNews] = useState<any[]>([])
  
  const [loding , setLoding] = useState<Boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [postPerPage, setPostPerPage] = useState<number>(10)



  const previous:number = 0
  const myArray:any = [...news]
  myArray.push(news)

  const [newNews, seNewNews] = useState<any[]>()
  useEffect(() => {
    const myData = previous +50 +50 +50 + 20 +20
    const fetchPosts = async () =>{
      setLoding(true)
      const res = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${myData}`)
      setNews(res.data.hits)
      seNewNews(myArray)
      setLoding(false)
    }
    fetchPosts()
  }, [])
 
  console.log(news.length)
  console.log(myArray)
  console.log(news)
  console.log(newNews)

  // get current post
  const lastPost:number = currentPage * postPerPage
  const firstPost:number = lastPost - postPerPage
  const currentPost:any = news.slice(firstPost, lastPost)

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <Box className='home_bg' component='div'>
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

               {currentPost?.map((n: { objectID: React.Key | null | undefined; story_title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; created_at: string | any[]; author: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; story_url: string | undefined }) =>  <TableBody key={n.objectID}>
                  <TableRow data-aos="zoom-in-down">
                      <TableCell>{n?.story_title}</TableCell> 
                      <TableCell>{n?.created_at.slice(0,10)}</TableCell> 
                      <TableCell>{n?.author} </TableCell> 
                      <TableCell sx={{cursor:'pointer', color:'#0000FF'}} ><a style={{textDecoration:'none'}} href={n?.story_url}><strong>Find Story Link</strong></a></TableCell>
                     
                      

                  </TableRow>
                </TableBody>)}
              </Table>
            </TableContainer>
              <Pagination
              postsPerPage={postPerPage}
              totalPosts={news.length}
              paginate={paginate}
                />
      </Container>
    </Box>
  )
}

export default Home

