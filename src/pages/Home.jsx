import { useState, useEffect } from 'react'
//components
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
//service
import { MovieLists } from '../services/MovieLists'
import { Trending } from '../services/Trending'

const Home = () => {
    const [nowPlaying, setNowPlaying] = useState(null);
    const [popularMovies, setPopularMovies] = useState(null);
    const [upcoming, setUpcoming] = useState(null);
    const [topRated, setTopRated] = useState(null);
    const [trandingTV, setTrandingTV] = useState(null);
    const [trandingMovies, setTrandingMovies] = useState(null);

    const handleSetNowPlayingVideos = async () => {
        const { results } = await MovieLists.nowPlaying();
        const randomMovie = results[Math.floor(Math.random() * results.length)]
        setNowPlaying(randomMovie);
    }

    const handleSetPopular = async () => {
        const { results } = await MovieLists.popular();
        setPopularMovies(results);
    }

    const handleSetUpcoming = async () => {
        const { results } = await MovieLists.upcoming();
        setUpcoming(results)
    }

    const handleSetTopRated = async () => {
        try {
            const { results } = await MovieLists.topRated();
            setTopRated(results);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSetTrendingTV = async () => {
        try {
            const { results } = await Trending.tv();
            setTrandingTV(results);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSetTrendingMovies = async () => {
        try {
            const { results } = await Trending.movies();
            setTrandingMovies(results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleSetNowPlayingVideos();
        handleSetPopular();
        handleSetUpcoming();
        handleSetTopRated();
        handleSetTrendingTV();
        handleSetTrendingMovies();
    }, [])

    return (
        <div className='relative'>
            <header className='relative'>
                <Navbar />
                <div className='h-[550px]'>
                    <div className='absolute top-0 w-full h-full text-white'>
                        <div className='w-full h-full'>
                            <div className='absolute w-full h-full bg-gradient-to-r from-black' />
                            <img src={`https://image.tmdb.org/t/p/original${nowPlaying?.backdrop_path}`} alt={nowPlaying?.title} className='w-full h-full object-cover' />
                        </div>
                        <div className='absolute w-full top-[30%] p-5'>
                            <h1 className='text-3xl md:text-5xl font-bold'>{nowPlaying?.title}</h1>
                            <div className='flex items-center justify-start gap-4 my-4'>
                                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                                <button className='border text-white border-gray-300 py-2 px-5'>Watch Later</button>
                            </div>
                            <h4 className='text-secondary text-sm'>Relased: {nowPlaying?.release_date}</h4>
                            <div className='w-full sm:w-[600px] h-auto'>
                                <p className='line-clamp-4 xs:line-clamp-3 sm:line-clamp-2'>
                                    {nowPlaying?.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className='mb-36'>
                <section className='w-full h-auto pt-10 px-5 text-white'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Popular</h1>
                    <div className='pt-5'>
                        <Slider movies={popularMovies} />
                    </div>
                </section>
                <section className='w-full h-auto pt-10 px-5 text-white'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Upcoming</h1>
                    <div className='pt-5'>
                        <Slider movies={upcoming} />
                    </div>
                </section>
                <section className='w-full h-auto pt-10 px-5 text-white'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Top Rated</h1>
                    <div className='pt-5'>
                        <Slider movies={topRated} />
                    </div>
                </section>
                <section className='w-full h-auto pt-10 px-5 text-white'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Trending TV</h1>
                    <div className='pt-5'>
                        <Slider movies={trandingTV} />
                    </div>
                </section>
                <section className='w-full h-auto pt-10 px-5 text-white'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Trending Movies</h1>
                    <div className='pt-5'>
                        <Slider movies={trandingMovies} />
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home;