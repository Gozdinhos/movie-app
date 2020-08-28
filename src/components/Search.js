import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

class search extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: '', movies: [] };
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleClick = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=5818f5bc9e9b3cc6ee174537b1dd3537&query=${this.state.inputValue}`
      )
      .then((response) => {
        this.setState({ movies: response.data.results });
      });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.inputValue}
          placeholder='Search'
          onChange={(e) => this.updateInputValue(e)}
        />
        <button onClick={this.handleClick}>Get Movie</button>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default search;
