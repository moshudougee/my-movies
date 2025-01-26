/* eslint-disable no-unused-vars */
import React from 'react'

const DetailsCard = ({
    movie: { title, overview, release_date, poster_path, backdrop_path},
}) => {
  return (
    <div className='flex flex-col gap-4 p-10 rounded-lg shadow-lg w-full h-full border'>
        <h2 className='text-red-800'>{title}</h2>
        <img 
            src={backdrop_path ? `https://image.tmdb.org/t/p/w500/${backdrop_path}` : '/no-movie.png'}
            alt={title}
        />
        <div className='flex'>
            <span className='text-slate-400'>{overview}</span>
        </div>
        <div className='flex'>
            <span className='text-slate-600'>Release Date: {release_date}</span>
        </div>
    </div>
  )
}

export default DetailsCard