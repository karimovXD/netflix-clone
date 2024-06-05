import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Movies } from '../services/Movies';
//components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

const Movie = () => {
    const { id } = useParams();

    const [movieDetails, setMovieDetails] = useState(null);
    const [movieRecommendations, setMovieRecommendations] = useState(null);

    const handleSetMovieDetails = async () => {
        const response = await Movies.details(id)
        setMovieDetails(response);
    }

    const handleMovieRecommendations = async () => {
        try {
            const { results } = await Movies.recommendations(id)
            setMovieRecommendations(results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleSetMovieDetails();
        handleMovieRecommendations();
    }, [id])

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
                            <h1 className='text-3xl md:text-5xl font-bold mb-2'>{movieDetails?.title}</h1>
                            <div>
                                <ul className='flex items-center justify-start gap-3 text-secondary text-[11px] mb-4'>
                                    <li className='flex items-center justify-start gap-3'><h4>{movieDetails?.release_date}</h4> <span className='h-5 w-[2px] bg-secondary' /></li>
                                    <li className='flex items-center justify-start gap-3' ><h4>2 h</h4> <span className='h-5 w-[2px] bg-secondary' /></li>
                                    <li className='flex items-center justify-start gap-3'>{movieDetails?.genres?.map((item, i) => <div key={i}><h3>{item.name}</h3></div>)}</li>
                                </ul>
                            </div>
                            <div className='w-full sm:w-[400px] h-auto'>
                                <p className='text-xs'>
                                    {movieDetails?.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className='w-full h-auto pt-10 px-5 text-white my-20'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Recommendations</h1>
                    <div className='pt-5'>
                        <Slider movies={movieRecommendations} />
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Movie