import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../MovieList/Details';
import AddMovie from '../MovieList/AddMovie';
import { useHistory } from 'react-router-dom';
function App() {
  const history = useHistory();

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
        {/* Details page */}
        <Route path="/addmovie">
          <AddMovie />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
