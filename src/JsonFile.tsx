import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { json } from 'stream/consumers'
import { MyNewsContext } from './context/Context'


const JsonFile = () => {
const [rawJson, setRawJson] = useState<any[]>([])


 const {createdAt} = useParams()

const  myallNews = useContext(MyNewsContext)


useEffect(()=>{
const mySingleNewsJson = myallNews.find(c => c?.created_at_i.toString() === createdAt?.toString())
setRawJson(mySingleNewsJson)
}, [])

  return (
    <Box >
        {JSON.stringify(rawJson)}
    </Box>
  )
}

export default JsonFile