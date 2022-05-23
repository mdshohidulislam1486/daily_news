import { Pagination } from '@mui/material'
import React from 'react'



const AppPagination = () => {
  return (
    <div>
        <div>
            <Pagination count={1000} variant="outlined" color="secondary" />
        </div>

    </div>
  )
}

export default AppPagination