import instance from './axios';
import React, { useEffect, useState } from 'react'
import './Row.css'


function Row({title , FetchUrl , isLargeRow = false}) {
const [movies,  setMovies] = useState([]);
 
const base_url="https://image.tmdb.org/t/p/original/";

useEffect( () => {
    async function fetchData(){
        const request = await instance.get(FetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
}, [FetchUrl]);


return (
    <div className= "row">
        <h2>{title}</h2>
        <div className="row__posters">
{(movies ||[]).map((movie) =>(
    <img
    className={`row__poster ${isLargeRow && " row__posterLarge"}`}
    key = {movie.id}
     src={`${base_url}${
        isLargeRow? movie.poster_path: movie.backdrop_path
    }`}
        alt=" {movie.name}"/>
))}
</div>
        </div>
    );
}


export default Row;