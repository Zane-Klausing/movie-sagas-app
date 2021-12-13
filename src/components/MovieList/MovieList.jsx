import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    function addNewMovieButton(){
        history.push(`/addmovie`);
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function handleOnClick(movie){
        // dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie });
        history.push(`/details/${movie.id}`);
    }

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={()=>{addNewMovieButton()}}>Add a Movie!</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={()=>{handleOnClick(movie)}}src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;