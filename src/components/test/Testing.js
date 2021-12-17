import React,{useState} from 'react'
import "./Testing.css"
import axios from 'axios'


function Testing() {
    const [state,setState] = useState([])
    return (
        <div>
            <button onClick={()=>{
                axios.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
                    setState(data.data)
                    console.log(data)
                })
            }}>DATA</button>
            <table>
            {state.map((obj,ind)=>{
                return(
                    <tr>
                        <td>{obj.id}</td>
                        <td>{obj.title}</td>
                    </tr>
                    
                )
            })}
            </table>
        </div>
        
    )
}

export default Testing
