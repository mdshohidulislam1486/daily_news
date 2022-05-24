import {  Button, Typography  } from '@mui/material';
import { Pagination } from '@mui/material'
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stack from '@mui/material/Stack';
import ReactPaginate from 'react-paginate';
import './Pagination.css'


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

  const myNum = pageNumbers.length

 const changePage = ({selected}:any) =>{
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
   paginate(selected + 1)
 }

  return (
    <>
    {/* <div>
      <ul style={{display:'flex', listStyle:"none", flexWrap:'wrap'}} >
          {pageNumbers.map(number => (
            <li style={{cursor:"pointer"}} key={number} >
              <Button  onClick={() => paginate(number)}>
                {number}
              </Button>
            </li>
          ))}
      </ul>
    </div> */}
    <div style={{marginTop:10}}>
        <Stack spacing={5}>
        <Pagination 
        onChange={(e)=> paginate((e.target as HTMLElement).textContent)} 
        count={myNum} variant="outlined" color="secondary"

         />
        </Stack>
         {/* <Pagination
          count={pageNumbers.length} 
          onChange={(e)=> paginate((e.target as HTMLElement).textContent)}  
          renderItem={(item) => (
          <PaginationItem
          
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      /> */}
    </div>
      {/* <div style={{marginTop:10}}>
        <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={totalPosts / 20}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={'paginationDisabled'}
        activeClassName={"paginationActive"}
        />
      </div> */}
    </>
  )
}

export default Paginations