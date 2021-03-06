import React from "react";
import "../Films/FilmsCard.scss";

const Pagination = ({filmsPerPage, totalFilms, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (<div>
        <ul className="pag-ul">{pageNumbers.map(number => (
            <li key={number}>
                <a onClick={() => paginate(number)} href="/#">{number}</a>
            </li>
        ))}</ul>
    </div>);
};

export default Pagination;