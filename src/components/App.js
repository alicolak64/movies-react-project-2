import React from 'react';

import axios from 'axios';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './SearchBar';
import MovieList from './MovieList';


console.log();

/*
HTTP Method


Get -> For get data
Post -> For add data
Put -> For update data
Patch -> For update data
Delete -> For delete data

*/

// Postman -> Use for http request

class App extends React.Component {

  // Fetch -> Fetch is a JavaScript function that allows us to perform asynchronous network queries and returns a promise back to us.

  // Axios -> Axios is a JavaScript library that allows us to make HTTP requests from our JavaScript code.

  state = {
    movies: [],
    search: ""
  }

  // async componentDidMount () {   // Fetch method with real Api TMDB Movie
  //   const baseUrl = "https://api.themoviedb.org/3/movie/popular?api_key=650635a58f208f24ba158f74cbee4dce&language=en-US&page=1";
  //   const response = await fetch(baseUrl);   // response is a promise
  //   const data = await response.json().results;
  //   // console.log(data);
  //   this.setState({
  //     movies : data
  //   });
  // }


  async componentDidMount() {  // Axios method with real api TMDB Movie   // axios dowload npm i axios

    const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`;
    const response = await axios.get(baseUrl);
    // console.log(response.data);
    const data = response.data.results;
    console.log(data);
    this.setState({
      movies: data
    });
  }

  deleteMovie = async (movie) => {   // Axios method 
    const baseUrl = "http://localhost:3002/movies/" + movie.id;
    //const baseUrl2 = `http://localhost:3002/movies/${movie.id}`;

    await axios.delete(baseUrl);

    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );
    // this.setState({     // Use this in first state assign operation
    //   movies : newMovieList
    // });

    this.setState(state => ({   // Use this in update state operation
      movies: newMovieList
    }));
  }


  searchMovie = (event) => {
    // console.log(event.target.value)
    this.setState({
      search: event.target.value
    })
  }

  render() {   // use only view operation

    let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.title.toLowerCase().indexOf(this.state.search.trim().toLowerCase()) !== -1
      }
    )

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <br />
            <br />
            <SearchBar
              searchProp={this.searchMovie}
            />
          </div>
        </div>

        <MovieList
          movies = {filteredMovies}
        />
      </div>
    );
  }

}


export default App;
