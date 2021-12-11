import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function AddMovie(){
    const history = useHistory();
    const dispatch = useDispatch();
    let [title, setTitle] = useState('');
    let [poster, setPoster] = useState('');
    let [description, setDescription] = useState('');
    let [genre, setGenre] = useState('');

function handleSaveButton (){
    dispatch({ type: 'ADD_MOVIE', payload: { title: title, poster: poster, description: description, genre_id: genre }});
    history.push(`/`);
}

function handleCancelButton (){
    history.push(`/`);
}


    return(
        <div>
            <input type="text" value={title} onChange={(evt) => setTitle(evt.target.value)}placeholder="Title"></input>
            <input type="text" value={poster} onChange={(evt) => setPoster(evt.target.value)}placeholder="Image link"></input>
            <input type="text" value={description} onChange={(evt) => setDescription(evt.target.value)}placeholder="Description"></input>
            <label for="genres">Choose a genre:</label>
            <select name="genres" id="genres" onChange={(evt) => setGenre(evt.target.value)}>
                <option value="1">Adventure</option>
                <option value="2">Animated</option>
                <option value="3">Biographical</option>
                <option value="4">Comedy</option>
                <option value="5">Disaster</option>
                <option value="6">Drama</option>
                <option value="7">Epic</option>
                <option value="8">Fantasy</option>
                <option value="9">Musical</option>
                <option value="10">Romantic</option>
                <option value="11">Science Fiction</option>
                <option value="12">Space-Opera</option>
                <option value="13">Superhero</option>
            </select>
            <button onClick={()=>{handleSaveButton()}}>Save</button>
            <button onClick={()=>{handleCancelButton()}}>Cancel</button>
        </div>
    )
}

export default AddMovie;