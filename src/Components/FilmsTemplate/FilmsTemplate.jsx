import React, {useState} from "react";
import "../Films/FilmsCard.scss";
import {Link} from "react-router-dom";

const FilmsTemplate = ({currentFilms, filmGenre}) => {

    const [favorite, setFavorite] = useState([]);

    const getFavorite = (fav) => {
        setFavorite((prevState) => {
            // console.log([...prevState, fav]);
            return [...prevState, fav];
            // console.log(favorite);
        });
    };


    return (
            <div className="container">{currentFilms.map((film, i) => {
                const {
                    poster_path,
                    release_date,
                    title,
                    genre_ids,
                    overview,
                    backdrop_path,
                    vote_average,
                    vote_count
                } = film;
                return (
                    <div key={film.id} className="movie_card" id="bright">
                        <div className="info_section">
                            <div className="movie_header">
                                <img className="locandina" alt="film pic"
                                     src={`http://image.tmdb.org/t/p/original/${poster_path}`}/>
                                <h1>{title}</h1>
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
                                <Link to={`/details/${film.id}`}>
                                    <button type="button">Details</button>
                                </Link>
                                <button type="button" onClick={() => {
                                    getFavorite(film);
                                }}>add to fav
                                    {/*<Favorite fav={favorite}/>*/}
                                </button>
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
export default FilmsTemplate;