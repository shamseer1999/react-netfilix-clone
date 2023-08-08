import React, { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from '../../constants/constants'
import './RowPost.css'
import axios from '../../axios'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      // console.log(response.data)
      setMovies(response.data.results)
    })
  },[])

  const handleMovie = (id)=>{
    console.log('>>>>>>>>>>>>>>>>>>',id)
    //getting youtube key
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data,'<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
      setUrlId(response.data.results[0])
    })
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>  
              {
                movies.map(obj=>
                  <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                )
              }
                
            </div>
            { urlId && <Youtube videoId={urlId.key} opts={opts}/> }
        </div>
  )
}

export default RowPost
