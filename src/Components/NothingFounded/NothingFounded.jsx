import React from "react";
import "../Films/FilmsCard.scss";

const NothingFounded = ({handleChange}) => {

    const noth = () => {
        return (<span className="ups">OOPS...Nothing Founded</span>);
    }

    return (<>{!handleChange ? noth() : "null"}</>);
};

export default NothingFounded;