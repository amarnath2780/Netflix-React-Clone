import React, { useState } from 'react'
import { useEffect } from 'react'
import "./RowPost.css"
import axios from '../../axios';
import {API_KEY, imageUrl} from '../../constents/constant';
import Youtube from 'react-youtube'

function RowPost(props) {

  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');


  useEffect(() => {
      axios.get(props.url).then(response=>{
        console.log(response.data);
        setMovies(response.data.results)
      }).catch(err=>{
        //alert('Networ error')
      })
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };


  const handlemovie = (id) =>{
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
    })
  }

  return (
    
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movies.map((obj)=>{
            return(
              <img onClick={()=>handlemovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Post" />
            )
          })
        }
      </div>

     {  urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
