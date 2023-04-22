import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
    const { title } = useParams(); // Get movie title from URL params
    const [movie, setMovie] = useState(null); // State for storing movie data

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?api_key=84a4505e304e7394c1671037b7328406&query=${title}&append_to_response=credits`
                );
                const movieData = response.data.results[0];
                setMovie(movieData);
            } catch (error) {
                console.error("Error fetching movie details", error);
            }
        };

        fetchMovieDetails();
    }, [title]);


    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className='p-4 mt-4 w-full flex flex-col md:flex-row items-center md:items-start justify-center'>

            <>

                <img className='h-96 md:h-[75vh] block md:sticky top-24 drop-shadow-[10px_10px_10px_rgba(1,1,0,1)]  hover:scale-110 ease-out duration-300 ' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <div className='ml-0 mt-7 text-center md:text-left  md:ml-4 w-full md:w-1/2 md:pl-6' >
                    <h1 className='text-2xl font-bold text-gray-700 mb-2'>
                        <span className="text-2xl text-orange-600"> Title: </span>  {movie.title}
                    </h1>
                    <h1 className='text-2xl font-bold text-gray-700 mb-2'>
                        <span className="text-2xl text-orange-600"> Year: </span>   {new Date(movie.release_date).getFullYear()}
                    </h1>
                    <h1 className='text-2xl font-bold text-gray-700 mb-2'>
                        <span className="text-2xl text-orange-600">  Vote Average : </span>{movie.vote_average}
                    </h1>
                    <p className='mt-3  md:text-justify text-3xl font-bold text-gray-700'>
                        <span className="text-2xl text-orange-600"> Description: </span> <span className="mt-3 text-justify text-xl font-normal">{movie.overview}{movie.overview}{movie.overview}</span>
                    </p>


                </div>
            </>

        </div>




    );
};

export default Details;
