import React, { Component } from 'react';

class SingleMovieRank extends Component {
	render(){
    	const movie = this.props.movie;
      	const usersWhoLikedMovie = this.props.usersWhoLikedMovie;
      	const users = this.props.users;
      	return(
          	<li className={movie.name} key={movie.name}>
          		<h2>{movie.name}</h2>
				<h3>Like By:</h3>
          		{!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (	
          			<p>No Likes</p>
        		) : (
        			<ul>
          				{usersWhoLikedMovie.map(userID=>{
                        	return (
                         		<li className={users[userID].id} key={users[userID].id}>{users[userID].name}</li>
                         	);
                        })}
          			</ul>
        		)}
          		
          	</li>
        );
    }	
}

export default SingleMovieRank;