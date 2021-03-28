import React, {useState} from "react";
import "../Films/FilmsCard.scss";
import {Link} from "react-router-dom";
import "../Films/FilmsCard.scss";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalFavorites from "../Modal/Modal";

const FilmsTemplate = ({currentFilms, filmGenre, lgShow, setLgShow}) => {

    const [favorite, setFavorite] = useState([]);
    // const [lgShow, setLgShow] = useState(false);


    const getFavorite = (fav) => {
        if (!(favorite.filter(e => e.id === fav.id).length > 0)) {
            setFavorite((prevState) => {
                return [...prevState, fav];
            });
        }
        else {
            alert('Oops... Movie Is Already Added To Modal List!');
        }
    };


    return (
        <>
            <ModalFavorites favorite={favorite} lgShow={lgShow} setFavorite={setFavorite} setLgShow={setLgShow}/>
            <div className="container">{currentFilms.map((film, i) => {
                const {
                    id,
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
                    <div key={id} className="movie_card" id="bright">
                        <div className="info_section">
                            <div className="movie_header">
                                <img className="locandina" alt="film pic"
                                     src={`http://image.tmdb.org/t/p/original/${poster_path}`}/>
                                <div>
                                    <h2>{title}</h2>
                                    <h5>Release date: <strong>{release_date.slice(0, -6)}</strong></h5>
                                    <h5>Vote average: <strong>{vote_average}/10</strong></h5>
                                    <h5>Vote count: <strong>{vote_count}</strong></h5>
                                </div>
                            </div>
                            <div className="movie_desc">
                                <h5 className="type">
                                    <span className="colorB">Genre: </span>{genre_ids.map(id => {
                                    return <span key={id} className="comma"><strong>{filmGenre[id]}</strong></span>
                                })} </h5>
                                <p className="text">
                                    {overview}
                                </p>
                                <Link to={`/details/${id}`}>
                                    <Button variant="outline-danger" type="button">Movie Details</Button>
                                </Link>
                                <Button type="button" variant="outline-danger" onClick={() => {
                                    getFavorite(film);
                                }}>Add To Favorites
                                </Button>
                            </div>
                        </div>
                        <img className="blur_back bright_back"
                             src={`http://image.tmdb.org/t/p/original/${backdrop_path}`} alt="poster"/>
                    </div>
                );
            })}
            </div>

        </>
    );
};
export default FilmsTemplate;