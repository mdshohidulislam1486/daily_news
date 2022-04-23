import { Box, Button, Pagination, Stack } from '@mui/material';
import React, { useState } from 'react'

interface Props{
    postsPerPage:number;
    totalPosts:number;
    paginate:Function;

}

interface newProps {
count?: number | undefined
}

const Paginations:React.FC<Props> = ({postsPerPage, totalPosts, paginate}:Props) => {

const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

 
  return (
    <>
    <ul style={{display:'flex', listStyle:"none"}} className='pagination'>
        {pageNumbers.map(number => (
          <li style={{cursor:"pointer"}} key={number} className='page-item'>
            <Button  onClick={() => paginate(number)}className='page-link'>
              {number}
            </Button>
          </li>
        ))}
    </ul>
    </>
  )
}

export default Paginations