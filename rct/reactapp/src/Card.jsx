import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Card(props) {
    console.log(props);
    return (
        <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="mypic" className="card__img" />
            <div className="card__info">
                <span className="card__category">{props.title}</span>
                <h3 className="card__title">{props.sname}</h3>
                <a href={props.link} target="_blank">
                    <button className="button">Watch Now</button>
                </a>
            </div>
        </div>
    </div>



    )

}
export default Card;