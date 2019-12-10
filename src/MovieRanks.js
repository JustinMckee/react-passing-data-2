import React, { Component } from 'react';
import SingleMovieRank from './SingleMovieRank.js';

class MovieRanks extends Component {
	render(){
      	const {users,movies,usersByMovie} = this.props;
      	const singleMovieRank = Object.keys(movies).map(id=>(
          <SingleMovieRank 
          	key={id}
          	movie={movies[id]}
  			users={users}
        	usersWhoLikedMovie={usersByMovie[id]}
  			/>
        ));
    	return(<ul>{singleMovieRank}</ul>);
    }
}

export default MovieRanks;