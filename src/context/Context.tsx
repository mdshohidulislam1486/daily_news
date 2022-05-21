import { Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import Home from '../Home/Home'

export const MyNewsContext = createContext<any[]>([])

interface Props{
  children:JSX.Element
}

const Context = ({children}:Props) => {
  const [news, setNews] = useState<any[]>([])
  const [addNum, setAddnum] = useState<number>(0)

  useEffect(() => {
    let myData = addNum + 1
     const fetchPosts = async () =>{
        const res = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${addNum}`)
        setNews([...news, ...res.data.hits])
      }
     const id =  setInterval(()=>{
        fetchPosts()
        setAddnum(myData)
        
      }, 10000)
      fetchPosts()
     return () => clearInterval(id)
    }, [addNum])

    console.log(news)

  return (
    <>
    <MyNewsContext.Provider value={news}>
      {children}
    </MyNewsContext.Provider>
    </>
  )
}

export default Context