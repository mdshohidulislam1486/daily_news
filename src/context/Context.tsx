import { Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'


export const MyNewsContext = createContext<any[]>([])

interface Props{
  children:JSX.Element
}

const Context = ({children}:Props) => {
  const [news, setNews] = useState<any[]>([])
  const [addNum, setAddnum] = useState<number>(0)

  useEffect(() => {
    let isCancelled:Boolean = false;
    let newNum = addNum + 1
     const fetchPosts = async () =>{
        const res = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${addNum}`)
        if(!isCancelled){
          setNews([...news, ...res.data.hits])
        }
      }
      fetchPosts()
      const id =  setInterval(()=>{ 
        setAddnum(newNum)
      }, 10000)
      
     return () =>{
      clearInterval(id)
      isCancelled = true;
     }

    }, [addNum])

   console.log(news, 'lets see how many times we get this data')

  return (
    <>
    <MyNewsContext.Provider value={news}>
      {children}
    </MyNewsContext.Provider>
    </>
  )
}

export default Context