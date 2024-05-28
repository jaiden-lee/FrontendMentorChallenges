import React from "react";
import Star from "../assets/images/icon-star.svg";
import "./Rating.css";

function Rating(props) {
    const {title, extraClass} = props;

    return (
        <div className={"rating "+extraClass}>
            <div className="star-container">
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
            </div>
            <h3>Rated 5 Stars in {title}</h3>
        </div>
    );
}

export default Rating;