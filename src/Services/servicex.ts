/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react"
import { MyNewsContext } from "../context/Context"


const  myallNews = useContext(MyNewsContext)

const service = {
    getData: () =>{
        return new Promise((resolve, reject) =>{
            resolve({
                count:myallNews.length,
                data:myallNews
            })
        })
    }
}

export default service