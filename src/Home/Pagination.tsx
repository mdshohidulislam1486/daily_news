import { Box, Button, Pagination, Stack } from '@mui/material';
import React, { useState } from 'react'

interface Props{
    postsPerPage:number;
    totalPosts:number;
    paginate:Function;

}



const Paginations:React.FC<Props> = ({postsPerPage, totalPosts, paginate}:Props) => {

const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

 
  return (
    <>
    <ul style={{display:'flex', listStyle:"none", flexWrap:'wrap'}} >
        {pageNumbers.map(number => (
          <li style={{cursor:"pointer"}} key={number} >
            <Button  onClick={() => paginate(number)}>
              {number}
            </Button>
          </li>
        ))}
    </ul>
    </>
  )
}

export default Paginations