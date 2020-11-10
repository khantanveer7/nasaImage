import React from 'react';
import './Card.css'

const Cards = ({ src, altSrc, name }) => {
    return (
        <div className="cards">
            <div className="card__image">
                <img src={src} alt={altSrc} />
                <div className="card__name">
                    <h3>{name}</h3>
                </div>
            </div>
        </div>


    )
}

export default Cards
