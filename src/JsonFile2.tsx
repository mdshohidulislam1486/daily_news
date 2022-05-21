import React from 'react'

interface Props{
singleNews:object;
}

const JsonFile2:React.FC<Props> = ({singleNews}:Props) => {
  return (
    <div>{JSON.stringify(singleNews)}</div>
  )
}

export default JsonFile2