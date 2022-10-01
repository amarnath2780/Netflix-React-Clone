import React, { useEffect, useState } from 'react'
import { API_KEY , imageUrl} from '../../constents/constant';
import axios from '../../axios';
import "./Banner.css"

function Banner() {

  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[11]);
      setMovie(response.data.results[15])
    })
    
  }, []);

  return (
    <div className='Banner' style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path :''})`}}>
        <div className="content">
            <h1 className='titile' >{movie ? movie.title : ''}</h1>

            <div className="banner-buttons">
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
            </div>

            <h1 className='discription'>{movie ? movie.overview: ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
