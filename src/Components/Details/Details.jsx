import React, {useState, useEffect} from "react";
// import {getDetails} from "../../AxiosRequests/http";
import DetailsTemplate from "../DetailsTemplate/DetailsTemplate";
import axios from "axios";

function Details({match}) {


    const [details, setDetails] = useState([]);
    const getDetails = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=62ea0c662081d0b490eb46e2ff1746ef&language=en-US`)
            .then((response) => {
                setDetails(response.data);
            });
    };


    useEffect(() => {
        getDetails();
    }, []);

    return (
        <DetailsTemplate details={details}/>
    );
};
export default Details;