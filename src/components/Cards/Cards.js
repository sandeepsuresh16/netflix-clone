import React, { useEffect, useState } from 'react'
import './Cards.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube'

function Cards(props) {
    const [movie, setMovie] = useState([])
    const [trailer, setTrailer] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data.results)
            setMovie(response.data.results)
        })
    }, [])

    const movieTrailer =(id)=>{
        
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results)
            if(response.data.results.length!==0){
                setTrailer(response.data.results[0])
            }else{console.log('no trailer')}
        })
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
    return (
        <div className='cardRow'>
            <h1 className='title'>{props.title}</h1>
            <div className='card'>
                {
                    movie.map((movieObj,index)=>
                        <img onClick={()=>movieTrailer(movieObj.id)} className={props.small ? 'smallThumbnail' : 'thumbnail'} src={`${imageUrl}${movieObj.backdrop_path}`} alt="movie_thumbnail" />
                    )
                }
            </div>
            {trailer &&(props.title==='Action Movies') && <YouTube videoId={trailer.key }opts={opts} />}
        </div>
    )
}

export default Cards
