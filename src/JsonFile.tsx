import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { json } from 'stream/consumers'


const JsonFile = () => {
const [rawJson, setRawJson] = useState<any[]>([])
const {createdAt} = useParams()

useEffect(()=>{
    fetch(`https://hn.algolia.com/api/v1/search_by_date?numericFilters=created_at_i=${createdAt}`)
    .then(res => res.json())
    .then(data => setRawJson(data))

}, [])

  return (
    <div>
        {JSON.stringify(rawJson)}
    </div>
  )
}

export default JsonFile