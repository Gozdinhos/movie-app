import React, { Component } from 'react';
import MovieItem from './MovieItem';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { movies } = this.props;
    return (
      <div className='movie-list'>
        {movies.map((movie) => (
          <MovieItem movie={movie} />
        ))}
      </div>
    );
  }
}
export default MovieList;
