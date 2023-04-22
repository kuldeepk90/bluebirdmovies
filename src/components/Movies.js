import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hover, setHover] = useState('');
    const [favourites, setFavourites] = useState([])


    function goAhead() {
        setPage(page + 1)
    }

    function goBack() {
        if (page > 1) {
            setPage(page - 1)
        }
    }


    useEffect(function () {
        let oldFav = localStorage.getItem("imdb");
        oldFav = JSON.parse(oldFav) || [];
        console.log(oldFav);
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=84a4505e304e7394c1671037b7328406&page=${page}`)
            .then((res) => {

                setMovies(res.data.results);
            }
            )

    }, [page])


    let add = (movie) => {
        let newArray = [...favourites, movie]
        setFavourites([...newArray]);
        localStorage.setItem("imdb", JSON.stringify(newArray))

    }

    let del = (movie) => {
        let newArray = favourites.filter((m) => m.id != movie.id)
        setFavourites([...newArray])
        localStorage.setItem("imdb", JSON.stringify(newArray))
    }


    return (
        <div className='mb-8'>
            <div className='mt-8 mb-8 font-bold text-2xl text-center'>Trending Movies</div>
            {
                movies.length == 0 ?
                    <div className='flex justify-center'>
                        <Oval
                            height="80"
                            width="80"
                            radius="9"
                            color="grey"
                            secondaryColor='grey'
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass

                        />
                    </div>

                    :

                    <div className='flex flex-wrap justify-center '>
                        {
                            movies.map((movie) => (
                                <div className={`m-4 relative bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] h-[38vh] w-[220px] md:h-[45vh] md:w-[250px] bg-center bg-cover bg-no-repeat rounded-xl flex items-end hover:scale-110 ease-out duration-300 drop-shadow-[10px_10px_10px_rgba(1,1,0,1)]`}
                                    onMouseEnter={() => setHover(movie.id)}
                                    onMouseLeave={() => setHover("")}
                                >
                                    {
                                        hover == movie.id &&
                                        <>
                                            {
                                                !favourites.find((m) =>
                                                    m.id == movie.id) ?
                                                    <div className='absolute p-2 text-xl top-2 right-2 bg-gray-800 rounded-3xl cursor-pointer'
                                                        onClick={() => add(movie)}
                                                    >😍</div> :
                                                    <div className='absolute p-2 text-xl top-2 right-2 bg-gray-800 rounded-3xl cursor-pointer'
                                                        onClick={() => del(movie)}
                                                    >❌</div>

                                            }


                                        </>

                                    }
                                    <div className='w-full flex flex-col'>
                                        <div className='w-full  font-bold text-center py-2 text-white '>
                                            Year: {new Date(movie.release_date).getFullYear()}
                                        </div>
                                        <Link to={`/movies/${movie.title}`}>

                                            <button className='w-full bg-gray-400 font-bold text-center py-2 text-white'>
                                                {movie.title}
                                            </button>
                                        </Link>

                                    </div>

                                </div>

                            ))
                        }





                    </div>

            }
            <Pagination pageProp={page} goBack={goBack} goAhead={goAhead} />
        </div>
    )
}

export default Movies