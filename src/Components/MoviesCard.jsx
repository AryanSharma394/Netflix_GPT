import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MoviesCard = ({image}) => {
  if(!image) return null;
  return (
    <div className='w-36 md:w-48'>
        <img alt="movies-pic" src={IMG_CDN_URL + image}/> 
    </div>
  )
}

export default MoviesCard