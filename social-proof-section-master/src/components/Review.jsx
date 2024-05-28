import React from "react";
import "./Review.css";

function Review(props) {
    const {name, review, image, extraClass} = props;

    return (
        <div className={"review "+extraClass}>
            <div className="header">
                <img src={image} alt="pfp" />
                <div>
                    <h3>{name}</h3>
                    <p>Verified Buyer</p>
                </div>
            </div>
            <p>{review}</p>
        </div>
    );
}

export default Review;