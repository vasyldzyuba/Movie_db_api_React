import React, {useCallback} from "react";
import {Modal, Button, Card, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

const ModalFavorites = ({favorite, setFavorite, lgShow, setLgShow}) => {

    const handleRemove = useCallback((id) => {
        const newFavorite = favorite.filter((item) => item.id !== id);
        setFavorite(newFavorite);
    }, [favorite]);

    return (
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
    </Modal>);
}
export default ModalFavorites;