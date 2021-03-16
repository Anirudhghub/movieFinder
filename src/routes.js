import React  from 'react';
import { useSelector } from 'react-redux'
import { Route , BrowserRouter , Switch } from 'react-router-dom';
import Home from './cotainers/home';
import MovieDetails from './cotainers/movieDetails';
import history from './history';

function Routes() {
  let selectedMovie=useSelector(state=>state.selectedMovie)

  return (
      <React.Fragment>
<BrowserRouter history={history}>
<div style={{height:"100%"}}>
<Switch>
<Route exact path="/" component={Home}/>
<Route path="/:id" >
  <MovieDetails selectedMovie={selectedMovie} />
  </Route>
</Switch>
</div>
</BrowserRouter>
</React.Fragment>
  );
}

export default Routes;
