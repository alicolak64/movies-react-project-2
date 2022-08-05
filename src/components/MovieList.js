import React from "react";


const MovieList = (props) => {    // If a component is a stateless functional component, it can be written as a function.


    return (    // Real Api TMDB Movie
        <div className="row">


            {props.movies.map((movie) => (
                <div className="col-lg-4" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                        <img
                            src={"https://www.themoviedb.org/t/p/w1280" + movie.poster_path}
                            className="card-img-top"
                            alt={movie.title}
                        />
                        <div className="card-body">
                            <h3 className="card-title">
                                {movie.title}
                            </h3>
                            <p className="card-text">
                                {movie.overview}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>
                                    <span className="badge bg-secondary">
                                        {movie.release_date}
                                    </span>
                                </h2>
                                <h2>
                                    <span className="badge bg-info">
                                        {movie.vote_average % 1 === 0 ? movie.vote_average + ".0" : movie.vote_average}
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}


export default MovieList;