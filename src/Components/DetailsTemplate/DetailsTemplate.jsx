// import React from "react";
import "../Films/FilmsCard.scss";

const DetailsTemplate = ({details}) => {
    const {
        title,
        overview,
        poster_path,
        backdrop_path,
        homepage,
        production_companies = [],
        release_date,
        genres = [],
        status,
        tagline,
        vote_average,
        vote_count,
        budget,
        runtime,
        original_language,
        production_countries = []
    } = details;
    // console.log()
    return (
        <div key={details.id} className="movie-card">

            <div className="container1">
                <a href="/#"><img src={`http://image.tmdb.org/t/p/original/${poster_path}`}
                                 alt="cover" className="cover"/></a>
                <div className="hero">
                    <img src={`http://image.tmdb.org/t/p/original/${backdrop_path}`} className="backPost" alt="backPost"/>
                    <div className="details">
                        <div className="title1">{title}</div>
                        <div className="title2">{tagline}</div>

                    </div>
                </div>

                <div className="description">

                    <h4><span
                        className="text-def">Genre: </span>{genres.map((item, index) => {
                        return (
                            <span key={index} className="comma"><strong
                                className="text-def space">{item.name}</strong>
                            </span>)
                    })}
                    </h4>
                    <h4><span className="text-def">Homepage:</span> <a className="linka" href={homepage}>{homepage}</a>
                    </h4>
                    <h4><span className="text-def">Budget: </span><strong className="text-def space"> ${budget}</strong>
                    </h4>
                    <h4><span className="text-def">Release date: </span><strong
                        className="text-def space"> {release_date}</strong></h4>
                    <h4><span className="text-def">Runtime: </span><strong
                        className="text-def space">{runtime}min.</strong></h4>
                    <h4><span className="text-def">Status: </span><strong className="text-def space">{status}</strong>
                    </h4>
                    <h4><span className="text-def">Original Language: </span><strong
                        className="text-def space">{original_language}</strong></h4>
                    <h4><span className="text-def">Vote Average: </span><strong
                        className="text-def space">{vote_average}/10</strong></h4>
                    <h4><span className="text-def">Vote Count: </span><strong
                        className="text-def space">{vote_count}</strong></h4>
                    <h4><span className="text-def">Production Companies:  </span>{production_companies.map((item) => {
                        return (
                            <span key={item.id} className="comma"><strong
                                className="text-def space">{item.name}</strong>
                            </span>);
                    })}
                    </h4>
                    <h4><span
                        className="text-def">Production Countries:  </span>{production_countries.map((item, index) => {
                        return (
                            <span key={index} className="comma"><strong
                                className="text-def space">{item.name}</strong>
                            </span>)
                    })}
                    </h4>
                    <div className="column2">
                        <p className="text-def">Description: {overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailsTemplate;