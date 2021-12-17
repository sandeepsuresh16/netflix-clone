import React, {useEffect, useState} from 'react'
import "./Banner.css"
import axios from "../../axios"
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
    const [movie, setMovie] = useState()
    const movieIndexNumber = Math.floor(Math.random()*10)
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results)
        })
    },[])
    return (
        <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie[movieIndexNumber].backdrop_path:""})`}}> 
            
            <div className="component">

                <h1 className='title'>{movie? movie[movieIndexNumber].title:""}</h1>
                <div className='buttton_items'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie? movie[movieIndexNumber].overview:""}</h1>
            </div>
            <div className="bottom"></div>
            
        </div>
    )
}

export default Banner
