import React, { Component } from 'react';

class MovieItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { movie } = this.props;
    return (
      <div className='movie-item'>
        <h1> Title : {movie.original_title}</h1>
        <h2> Date : {movie.release_date}</h2>
      </div>
    );
  }
}

export default MovieItem;
