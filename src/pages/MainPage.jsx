import React from 'react';
import '../styles/MainPage.scss';
import MovieCard from '../components/MovieCard';

function MainPage({ popular, nowPlaying }) {
    return (
        <div className="movies-container">
            <div className="now__playing">
                <h2>현재 상영중</h2>
                <ul className="section">
                    {nowPlaying.slice(0, 4).map((item) => (
                        <MovieCard key={item.id} item={item} />
                    ))}
                </ul>
            </div>

            <div className="popular">
                <h2>TOP5</h2>
                <ul className="section">
                    {popular.map((item) => (
                        <MovieCard key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MainPage;
