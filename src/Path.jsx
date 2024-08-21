import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

function Path({ popular, nowPlaying }) {
    return (
        <Routes>
            <Route path="/" element={<MainPage popular={popular} nowPlaying={nowPlaying} />} />
            <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
    );
}

export default Path;
