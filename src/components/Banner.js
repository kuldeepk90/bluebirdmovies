import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Banner = () => {

    const [movie, setMovie] = useState({});
    useEffect(function () {
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=84a4505e304e7394c1671037b7328406&page=3")
            .then((res) => {

                setMovie(res.data.results[0]);
            }
            )

    }, [])

    return (
        <div
            className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[82vh] bg-center bg-cover bg-no-repeat flex items-end drop-shadow-[10px_10px_10px_rgba(1,1,0,1)]`}
        >
                <div className="text-xl md:text-3xl text-white bg-gray-900 p-6 w-full flex justify-center bg-opacity-50">
                   Movie : {movie.title}
                </div>
          
            
        </div>
    );
};

export default Banner;
