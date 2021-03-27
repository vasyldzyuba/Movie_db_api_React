import axios from "axios";

const getFilms = async (setFilms) => {
    try {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=62ea0c662081d0b490eb46e2ff1746ef&language=en-US')
            .then((response) => {
                setFilms(response.data.results);

                // console.log(response.data.results);
            })
    } catch (e) {
        console.log(e);
    }
};
const getAllFilms = async (setAllFilms) => {
    try {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=62ea0c662081d0b490eb46e2ff1746ef&language=en-US')
            .then((response) => {
                setAllFilms(response.data.results);
                // console.log(response.data.results);
            })
    } catch (e) {
        console.log(e);
    }
};


const getDetails = async (setDetails, match) => {
    try {
        await axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=62ea0c662081d0b490eb46e2ff1746ef&language=en-US`)
            .then((response) => {
                setDetails(response.data);
            });
    } catch (e) {
        console.log(e);
    }
};





const getGenres = async (setFilmGenre) => {
    try {
        await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=62ea0c662081d0b490eb46e2ff1746ef')
            .then((response) => {
                const genres = response.data.genres.reduce((genres, gen) => {
                    const {id, name} = gen;
                    genres[id] = name;
                    return genres;
                }, []);
                setFilmGenre(genres);
            })
    } catch (e) {
        console.log(e);
    }
};

export {getFilms, getGenres, getDetails, getAllFilms};


