import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details(){
    const history = useHistory();
    const selectedMovie = useSelector((store) => store.selectedMovie);

function handleBackButton (){
    history.push(`/`);
}
    return(
        <div>
            <h1>{selectedMovie.title}</h1>
            <img src={selectedMovie.poster}></img>
            <h3>{selectedMovie.description}</h3>
            <button onClick={()=>{handleBackButton()}}>Back</button>
        </div>
    )
}

export default Details;