import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
    return (
        <div className='landing'>
            <Link to='/home'>
                <div  className="landing-button">
                    <button>Ir al Home</button>
                </div>
            </Link>
        </div>
    )
}