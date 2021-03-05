import React from "react";
import "../FilmsCard/FilmsCard.scss";
import {Link} from "react-router-dom";
const Films = ({currentFilms, filmGenre}) => {
    return (
        <div className="container">{currentFilms.map((film) => {
            const {
                poster_path,
                release_date,
                original_title,
                genre_ids,
                overview,
                backdrop_path,
                vote_average,
                vote_count,
                original_language
            } = film;
            return (
                <div key={film.id} className="movie_card" id="bright">
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="locandina" alt="film pic"
                                 src={`http://image.tmdb.org/t/p/original/${poster_path}`}/>
                            <h1>{original_title}</h1>
                            <h4>Release date: <strong>{release_date.slice(0, -6)}</strong></h4>
                            <h4>Vote average: <strong>{vote_average}/10</strong></h4>
                            <h4>Vote count: <strong>{vote_count}</strong></h4>
                        </div>
                        <div className="movie_desc">
                            <p className="type">
                                <span className="colorB">Genre: </span>{genre_ids.map(id => {
                                return <span key={id} className="comma"><strong>{filmGenre[id]}</strong></span>
                            })} </p>
                            <p className="text">
                                {overview}
                            </p>
                            <Link to={`/details/${film.id}`}><button type="button">Details</button></Link>
                        </div>

                    </div>
                    <img className="blur_back bright_back"
                         src={`http://image.tmdb.org/t/p/original/${backdrop_path}`} alt="poster"/>
                </div>
            );
        })}

        </div>
    );
};
export default Films;