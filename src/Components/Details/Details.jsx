import React, {useState, useEffect} from "react";
import {getDetails} from "../../AxiosRequests/http";
import DetailsTemplate from "../DetailsTemplate/DetailsTemplate";

function Details({match}) {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        getDetails(setDetails, match);
    }, [match]);

    return (
        <DetailsTemplate details={details}/>
    );
}
export default Details;