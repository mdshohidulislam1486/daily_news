

import {  Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import React, {  useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import  {MyNewsContext}  from '../context/Context'


import './Home.css'
import Pagination from './Pagination'




const Home:React.FC = ()  => {

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [postPerPage, setPostPerPage] = useState<number>(20)


  let navigate = useNavigate()
  const news = useContext(MyNewsContext)
  // get current post
  const lastPost:number = currentPage * postPerPage
  const firstPost:number = lastPost - postPerPage
  const currentPost:any = news?.slice(firstPost, lastPost)

  const paginate = (pageNumber: React.SetStateAction<number>) =>{
    setCurrentPage(pageNumber)
    console.log(pageNumber)
  };

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
                      <TableCell><strong>Author</strong></TableCell>
                      <TableCell><strong>URL</strong></TableCell>
                   </TableRow>
                 </TableHead>
 
                {currentPost?.map((n: { objectID: React.Key | null | undefined; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; created_at: string | any[];created_at_i: string | any[]; author: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; url: string | undefined }) =>  <TableBody key={n.objectID}>
                
                   <TableRow sx={{cursor:'pointer'}} onClick={() => {navigate(`newsdetails/${n.created_at_i}`)}}>  
                       <TableCell sx={{minWidth:'15em'}}> {n?.title}</TableCell> 
                       <TableCell sx={{minWidth:'7em'}}> {n?.created_at.slice(0,10)}</TableCell> 
                       <TableCell sx={{minWidth:'5em'}}>{n?.author} </TableCell> 
                       <TableCell  sx={{cursor:'pointer'}}> <a style={{textDecoration:'none'}} href={n?.url}> <strong>{n.url}</strong></a></TableCell>
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

