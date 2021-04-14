import React,{useState} from 'react'
import Forms from './Forms'
function App(){
const [count,setCount]=useState(0)
const change=()=>{
    setCount(count+1)
}
    return(
        <div>
            <Forms/>
        </div>
    )
}
export default App