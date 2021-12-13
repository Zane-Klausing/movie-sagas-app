import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Details(){
    const history = useHistory();
    const selectedMovie = useSelector((store) => store.selectedMovie);
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(params.id)
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: params.id
        })
    }, [])

function handleBackButton (){
    history.push(`/`);
}
    return(
        <div>
            <h1>{selectedMovie.title}</h1>
            <img src={selectedMovie.poster}></img>
            <h3>{selectedMovie.description}</h3>
            <button onClick={()=>{handleBackButton()}}>Back</button>
            {selectedMovie.genres.map((genre)=>{
                return (
                    <li>{genre}</li>
                )}
            )}
        </div>
    )
}

export default Details;