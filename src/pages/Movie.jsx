import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Movies } from '../services/Movies';
//components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Movie = () => {
    const { id } = useParams();

    const [movieDetails, setMovieDetails] = useState(null);

    const handleSetMovieDetails = async () => {
        const response = await Movies.details(id)
        setMovieDetails(response);
    }

    useEffect(() => {
        handleSetMovieDetails();
    }, [])

    console.log(movieDetails);

    return (
        <div className='text-white'>
            <header className='relative'>
                <Navbar />
                <div className='h-[550px]'>
                    <div className='absolute top-0 w-full h-full text-white'>
                        <div className='w-full h-full'>
                            <div className='absolute w-full h-full bg-gradient-to-r from-black' />
                            <img src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`} alt={movieDetails?.title} className='w-full h-full object-cover' />
                        </div>
                        <div className='absolute w-full top-[30%] p-5'>
                            <h1 className='text-3xl md:text-5xl font-bold mb-4'>{movieDetails?.title}</h1>
                            <h4 className='text-secondary text-sm'>Relased: {movieDetails?.release_date}</h4>
                            <div className='w-full sm:w-[600px] h-auto'>
                                <p className='line-clamp-4 xs:line-clamp-3 sm:line-clamp-2'>
                                    {movieDetails?.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main></main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Movie