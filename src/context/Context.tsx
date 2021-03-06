/* eslint-disable react-hooks/exhaustive-deps */


import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'
import axios from 'axios'



export const MyNewsContext = createContext<any[]>([])

interface Props{
  children:JSX.Element
}

export const Context = ({children}:Props) => {
  const [news, setNews] = useState<any[]>([])
  const [addNum, setAddnum] = useState<number>(0)

 

  useEffect(() => {
    let newNum = addNum + 1
    const fetchPosts = async () =>{
        const res = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${addNum}`)
        setNews([...news, ...res.data.hits])
        }
      fetchPosts()
      const id =  setInterval(()=>{ 
        setAddnum(newNum)
      }, 10000)

      return () =>{
        clearInterval(id)
       }
    }, [addNum])

  return (
    <>
    <MyNewsContext.Provider value={news}>
      {children}
    </MyNewsContext.Provider>
    </>
  )
}

export default Context