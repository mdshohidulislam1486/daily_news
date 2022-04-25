import { baseurl } from "./constant";

const fetchNesData = async () =>{
try {
let response = await fetch(`${baseurl}?query=20`)
if(response.ok){
    let jsonResponse = await response.json()
    return jsonResponse;
}
}
catch(error){
console.log(error)
}
}

export {fetchNesData}