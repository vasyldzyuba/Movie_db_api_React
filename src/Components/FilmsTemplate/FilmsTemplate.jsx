import React, {useState, useCallback} from "react";
import "../Films/FilmsCard.scss";
import {Link} from "react-router-dom";
import "../Films/FilmsCard.scss";
import {Modal, Card, Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            alert('Oops... Movie Is Already Added To Favorite List!');
        }
    };


    const handleRemove = useCallback((id) => {
        const newFavorite = favorite.filter((item) => item.id !== id);
        setFavorite(newFavorite);
        console.log(newFavorite);
    }, [favorite]);


    return (
        <>
            <Modal
                className="modal-absolute"
                size="sm"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        My Favorite Movies: ({favorite.length})
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body> {!favorite.length ?
                    <p className="no-favorites">You Have No Favorites Yet!</p> : favorite.map((film) => {
                        const {
                            release_date,
                            id,
                            backdrop_path,
                            title
                        } = film;
                        return (<Card className="bg-card" key={id}>
                            <Image variant="top" style={{width: '100%'}}
                                   src={`http://image.tmdb.org/t/p/original/${backdrop_path}`}/>
                            <Card.Body className="align-items-center">
                                <Card.Title
                                    className="favorite-title ">{title} ({release_date.slice(0, -6)})</Card.Title>
                            </Card.Body>
                            <Button variant="outline-danger" type="button" onClick={() => handleRemove(id)}>Remove From
                                Favorites</Button><br/>
                            <Link to={`/details/${id}`}>
                                <Button variant="outline-secondary" type="button">Movie Details</Button>
                            </Link>
                            <br/></Card>)
                    })}</Modal.Body>
            </Modal>
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