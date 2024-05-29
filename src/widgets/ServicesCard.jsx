import React, { useState, useEffect } from 'react';
import './Card.css'; 
import { Link } from 'react-router-dom';
const Card = ({ imageUrl, title, description, path}) => {
    const [isHovered, setIsHovered] = useState(false);
    

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setIsHovered(false);
        }, 1800);

        return () => clearTimeout(timeoutId);
    }, [isHovered]);

    return (
        <div className={`card ${isHovered ? 'hover' : ''}`}>
            <div
                className="card-img"
                style={{ backgroundImage: `url(${imageUrl})` }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="overlay">
                    <div className="overlay-content">
                        <Link to={path}>Enroll Service</Link>
                    </div>
                </div>
            </div>

            <div className="card-content">
                <a href="#!">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </a>
            </div>
        </div>
    );
};

export default Card;
