
import {  Box, CircularProgress, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

import './Home.css'
import Pagination from './Pagination'




const Home:React.FC = ()  => {
  const [news, setNews] = useState<any[]>([])
  
  const [loding , setLoding] = useState<Boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [postPerPage, setPostPerPage] = useState<number>(10)
  const [newNews, seNewNews] = useState<any[]>([])
  const [addNum, setAddnum] = useState<number>(0)

  useEffect(() => {
  let myData = addNum + 1
   const fetchPosts = async () =>{
      const res = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${addNum}`)
      setNews(res.data.hits)
      setNews([...news, ...res.data.hits])
    }
   const id =  setInterval(()=>{
      fetchPosts()
      setAddnum(myData)
      
    }, 10000)
    fetchPosts()
   return () => clearInterval(id)
  }, [addNum])
  

  console.log(addNum)
  console.log(newNews)
  console.log(news)
  console.log(newNews)


  // get current post
  const lastPost:number = currentPage * postPerPage
  const firstPost:number = lastPost - postPerPage
  const currentPost:any = news?.slice(firstPost, lastPost)

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <Box className='home_bg'>
      <Typography variant='h3' sx={{textAlign:'center', fontWeight:600, py:5}}>Latest News</Typography>
   
       <Container sx={{display:"flex", flexWrap:'wrap', justifyContent:"center"}}>
       <TableContainer>
               <Table>
                 <TableHead >
                   <TableRow data-aos="zoom-in-down">
                   <TableCell><strong>Title</strong></TableCell>
                   <TableCell><strong>Created at</strong></TableCell>
                   <TableCell><strong>author</strong></TableCell>
                   <TableCell><strong>Link Orginated</strong></TableCell>
                   
                   </TableRow>
                 </TableHead>
 
                {currentPost?.map((n: { objectID: React.Key | null | undefined; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; created_at: string | any[]; author: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; story_url: string | undefined }) =>  <TableBody key={n.objectID}>
                   <TableRow data-testid="test">
                       <TableCell data-testid='title'>{n?.title}</TableCell> 
                       <TableCell>{n?.created_at.slice(0,10)}</TableCell> 
                       <TableCell>{n?.author} </TableCell> 
                       <TableCell sx={{cursor:'pointer', color:'#0000FF'}} ><a style={{textDecoration:'none'}} href={n?.story_url}><strong>Find Story Link</strong></a></TableCell>
                   </TableRow>
                 </TableBody>)}
               </Table>
             </TableContainer>
               <Pagination
               postsPerPage={postPerPage}
               totalPosts={news?.length}
               paginate={paginate}
                 />
       </Container>
     
    </Box>
  )
}

export default Home

