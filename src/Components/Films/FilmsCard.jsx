import React, {useState, useEffect} from "react";
import {getFilms, getGenres, getAllFilms} from "../../AxiosRequests/http";
import Pagination from "../Pagination/Pagination";
import FilmsTemplate from "../FilmsTemplate/FilmsTemplate";
import NothingFounded from "../NothingFounded/NothingFounded";
import {Button, InputGroup, FormControl, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ".//FilmsCard.scss";

export default function FilmsCard() {

    const [films, setFilms] = useState([]);
    const [filmGenre, setFilmGenre] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [allFilms, setAllFilms] = useState([]);
    const [defaultGenre] = useState("All Genres");
    const [searchTermSelect, setSearchTermSelect] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage] = useState(6);
    const [lgShow, setLgShow] = useState(false);
    const indexOfLastFilm = currentPage * filmsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
    const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSelect = event => {
        setSearchTermSelect(event.target.value);

    };

    let results;
    const getSelectedResults = () => {
        getAllFilms(setAllFilms);
        results = searchTermSelect === "All Genres"
            ? films
            : allFilms.filter((el) => el.genre_ids.find((elem) => searchTermSelect.includes(elem))
            )
        setFilms(results);
    }

    const getSearchResults = () => {
        const results = !searchTerm
            ? films
            : films.filter(title =>
                title.original_title.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase())
            );
        setFilms(results);
    };


    useEffect(() => {
        searchTermSelect === "All Genres" ? getFilms(setFilms) && getGenres(setFilmGenre)
            : getSelectedResults();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTermSelect]);

    useEffect(() => {
        !searchTerm ? getFilms(setFilms) && getGenres(setFilmGenre)
            : getSearchResults();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);


    return (
        <>
            <Container fluid={"md"}>
                <Row>
                    <InputGroup>
                        <FormControl
                            className="searchTerm"
                            size={"lg"}
                            value={searchTerm}
                            onChange={handleChange}
                            placeholder="Search movie"
                            aria-label="Search movie"
                            aria-describedby="basic-addon2"
                        />
                        <select name="films" id="films" onChange={handleSelect}>
                            <option value={defaultGenre}>
                                {defaultGenre}
                            </option>
                            {filmGenre.map((genre, id) => {
                                return (<option value={id} key={id}>{genre}</option>);
                            })}
                        </select>

                        <Button className="btn-fav" variant="outline-success" onClick={() => setLgShow(true)}>My
                            Favorites</Button>
                    </InputGroup>
                </Row>
            </Container>
            <FilmsTemplate currentFilms={currentFilms} lgShow={lgShow} setLgShow={setLgShow} filmGenre={filmGenre}/>
            {!searchTerm.length ?
                <Pagination filmsPerPage={filmsPerPage} totalFilms={films.length} paginate={paginate}/>
                : <NothingFounded/>}
            {!results ? <NothingFounded/> : null}
        </>
    );
}

