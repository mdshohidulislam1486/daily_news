import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { json } from 'stream/consumers'
import { MyNewsContext } from './context/Context'


const JsonFile = () => {
const [rawJson, setRawJson] = useState<any[]>([])


 const {createdAt} = useParams()
/*
useEffect(()=>{
    
    fetch(`https://hn.algolia.com/api/v1/search_by_date?numericFilters=created_at_i=${createdAt}`)
    .then(res => res.json())
    .then(data => {
    setRawJson(data)
    })
    

}, []) */

const  myallNews = useContext(MyNewsContext)

console.log(myallNews, 'yap it is my all news')

useEffect(()=>{
const mySingleNewsJson = myallNews.find(c => c?.created_at_i.toString() === createdAt?.toString())
console.log(mySingleNewsJson, 'And a string')
setRawJson(mySingleNewsJson)
}, [])

  return (
    <div>
        {JSON.stringify(rawJson)}
    </div>
  )
}

export default JsonFile