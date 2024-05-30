import React from 'react';
import { Link } from 'react-router-dom';

const SliderImage = ({ item }) => <Link to='movie' className='flex flex-col items-center justify-center gap-2'>
    <img src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`} alt="movie" className='cursor-pointer' />
    <h1 className='text-xs ss:text-sm line-clamp-1 md:text-base'>{item?.title || item?.name}</h1>
</Link>

export default SliderImage;