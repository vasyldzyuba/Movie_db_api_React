import React, {useState, useEffect} from "react";
import {getFilms, getGenres} from "../../AxiosRequests/http";
import Pagination from "../Pagination/Pagination";
import FilmsTemplate from "../FilmsTemplate/FilmsTemplate";
import NothingFounded from "../NothingFounded/NothingFounded";
import Loader from "../Loader/Loader";

import ".//FilmsCard.scss";

export default function FilmsCard() {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filmGenre, setFilmGenre] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage, setFilmsPerPage] = useState(6);
    const indexOfLastFilm = currentPage * filmsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
    const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    const handleChange = event => {
        setSearchTerm(event.target.value);
    };


    function getSearchResults() {
        const results = !searchTerm
            ? films
            : films.filter(title =>
                title.original_title.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase())
            );
        setFilms(results);
    }


    useEffect(() => {
        !searchTerm ? getFilms(setFilms) && getGenres(setFilmGenre)
            : getSearchResults();
        // getDetails(setDetails);
    }, [searchTerm]);


    return (
        <>
            <div className="input-cont">
                <input type="text" className="searchTerm" value={searchTerm}
                       onChange={handleChange} placeholder="Search movie"/>
            </div>
            <FilmsTemplate currentFilms={currentFilms} filmGenre={filmGenre}/>
            {!films.length ? <NothingFounded/> :
                <Pagination filmsPerPage={filmsPerPage} totalFilms={films.length} paginate={paginate}/>}
        </>
    );
}

